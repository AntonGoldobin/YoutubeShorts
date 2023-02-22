import { Config, GeneralPost, VideoParams } from '../../types/types'
const fs = require('fs')
const readline = require('readline')
import { google } from 'googleapis'
const OAuth2 = google.auth.OAuth2
import path from 'path'
import { removeVideoContent } from '../../utils'
import { saveUniquePostId } from '@src/db/models/savePostId'

// If modifying these scopes, delete your previously saved credentials in client_oauth_token.json
const SCOPES = [
	'https://www.googleapis.com/auth/cloud-platform',
	'https://www.googleapis.com/auth/youtube.upload',
	'https://www.googleapis.com/auth/youtube',
]

/**
 * Upload the video file.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
export const uploadToYoutube = (
	auth: any,
	config: Config,
	post: GeneralPost,
	videoParams: VideoParams,
) => {
	console.log('uploadVideo')
	const service = google.youtube('v3')

	service.videos.insert(
		{
			auth: auth,
			part: ['snippet', 'status'],
			requestBody: {
				snippet: {
					title: config.youtubeVideoTitle,
					description: config.youtubeVideoDescription,
					tags: config.youtubeVideoTags,
					categoryId: config.categoryId.toString(),
					defaultLanguage: 'en',
					defaultAudioLanguage: 'en',
				},
				contentDetails: {
					contentRating: {
						ytRating: 'ytAgeRestricted',
					},
				},
				status: {
					privacyStatus: 'private',
				},
			},
			media: {
				body: fs.createReadStream(videoParams.downloadedFilePath),
			},
		},
		function (err: unknown, response: any) {
			if (err) {
				console.log('The API returned an error: ' + err)
				removeVideoContent(videoParams)
				return
			}

			service.thumbnails.set(
				{
					auth: auth,
					videoId: response.data.id,
					media: {
						//TODO test that and try without "CreateReadStream"
						body: fs.createReadStream(
							path.join(
								'https://images.unsplash.com/photo-1673868298575-34a1a9b4e5c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
							),
						),
					},
				},
				function (err: unknown, response: any) {
					if (err) {
						console.log('The API returned an error: ' + err)
						removeVideoContent(videoParams)
						return
					}
					removeVideoContent(videoParams)
					// Save url to DB for checking in future and ignoring to posting
					saveUniquePostId(post, config)
					console.log(response.data)
				},
			)
		},
	)
}
