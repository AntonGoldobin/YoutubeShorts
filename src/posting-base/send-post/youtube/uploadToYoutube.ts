import { IConfig, IGeneralPost, IVideoParams } from '../../types/types'
import fs from 'fs'
import { google } from 'googleapis'
import { removeVideoContent } from '../../utils/utils'
import { saveUniquePostId } from '@src/db/models/savePostId'
import { sendLogInfo } from '@src/posting-base/utils/debugging'

/**
 * Upload the video file.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
export const uploadToYoutube = (
	auth: any,
	config: IConfig,
	post: IGeneralPost,
	videoParams: IVideoParams,
): Promise<any> => {
	return new Promise((res, rej) => {
		sendLogInfo('uploadVideo')
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
					sendLogInfo('The API returned an error: ', err)
					removeVideoContent(videoParams)
					rej(err)
				}

				removeVideoContent(videoParams)
				// Save url to DB for checking in future and ignoring to posting
				saveUniquePostId(post, config)
				res(null)

				//service.thumbnails.set(
				//	{
				//		auth: auth,
				//		videoId: response.data.id,
				//		media: {
				//			body: fs.createReadStream(videoParams.downloadedThumbnailPath),
				//		},
				//	},
				//	function (err: unknown, response: any) {
				//		if (err) {
				//			sendLogInfo('The API returned an error: ', err)
				//			removeVideoContent(videoParams)
				//			rej(err)
				//		}
				//		removeVideoContent(videoParams)
				//		// Save url to DB for checking in future and ignoring to posting
				//		saveUniquePostId(post, config)
				//		res(null)
				//	},
				//)
			},
		)
	})
}
