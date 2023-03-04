import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import ffmpeg from 'fluent-ffmpeg'
import { IConfig, IGeneralPost, IVideoParams } from '../types/types'
import { sendLogInfo } from '../utils/debugging'

interface IError {
	message: string
}

export const downloadVideoAndPrepare = async (
	post: IGeneralPost,
	videoParams: IVideoParams,
	config: IConfig,
) => {
	await downloadVideo(post, videoParams, config)
	await downloadThumbnail(post, videoParams)
	//await editThumbnail(videoParams, config)
}

const downloadVideo = (
	post: IGeneralPost,
	videoParams: IVideoParams,
	config: IConfig,
) => {
	sendLogInfo('starts download video')

	return new Promise((res, rej) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		const video = ffmpeg(post.url)

		video
			.setFfmpegPath(ffmpegPath.path)
			.videoCodec('libx264')
			.on('error', function (err: IError) {
				rej('An error occurred: ' + err.message)
			})
			.on('end', () => {
				res(null)
				sendLogInfo('Video/audio have been downloaded and merged.')
			})

		if (config.contentType === 'reddit') {
			video.addInput(post.audio ? post.audio : null)
		}

		video.save(videoParams.downloadedFilePath)
	})
}

const downloadThumbnail = (post: IGeneralPost, videoParams: IVideoParams) => {
	sendLogInfo('starts download thumbnail')

	return new Promise((res, rej) => {
		ffmpeg(post.url)
			.on('error', function (err: IError) {
				rej('An error occurred: ' + err.message)
			})
			.screenshots(
				//Takes screenshot for thumbnail
				{
					count: 1, //how many screenshots
					timemarks: [1], // number of seconds
					filename: videoParams.videoId + '.png',
					folder: videoParams.downloadedFolderPath,
				},
			)
			.on('end', () => {
				res(null)
				sendLogInfo('The thumbnail has been downloaded.')
			})
	})
}

//const editThumbnail = (videoParams: VideoParams, config: Config) => {
//	//DOESN'T WORK ON THE DOCKER PLATFORM

//	sendLogInfo('starts edit thumbnail')

//	if (!config.thumbnailLogo) return

//	return new Promise((res, rej) => {
//		images(videoParams.downloadedThumbnailPath) //Load image from file
//			.resize(780) //Geometric scaling the image to 400 pixels width
//			.draw(
//				images(path.join(__dirname, '../assets/thumbnail-cover-bg.png')).resize(
//					780,
//					1688,
//				),
//				0,
//				0,
//			)
//			.draw(
//				images(Buffer.from(config.thumbnailLogo, 'base64')).size(300),
//				240,
//				240,
//			)
//			.saveAsync(videoParams.downloadedThumbnailPath, () =>
//				res(sendLogInfo('edited thumbnail has been saved')),
//			)
//	})
//}
