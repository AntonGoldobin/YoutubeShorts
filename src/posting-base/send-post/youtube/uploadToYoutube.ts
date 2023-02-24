import { Config, GeneralPost, VideoParams } from '../../types/types'
import fs from 'fs'
import { google } from 'googleapis'
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
				// contentDetails: {
				// 	contentRating: {
				// 		ytRating: 'ytAgeRestricted',
				// 	},
				// },
				status: {
					privacyStatus:
						process.env.NODE_ENV === 'development' ? 'private' : 'public',
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
						body: fs.createReadStream(videoParams.downloadedThumbnailPath),
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
				},
			)
		},
	)
}
