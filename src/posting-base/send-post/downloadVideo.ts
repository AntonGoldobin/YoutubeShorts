import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import ffmpeg from 'fluent-ffmpeg'
import { Config, GeneralPost, VideoParams } from '../types/types'
import { sendLogInfo } from '../utils/debugging'

interface IError {
	message: string
}

export const downloadVideoAndPrepare = async (
	post: GeneralPost,
	videoParams: VideoParams,
	config: Config,
) => {
	await downloadVideo(post, videoParams)
	await downloadThumbnail(post, videoParams)
	//await editThumbnail(videoParams, config)
}

const downloadVideo = (post: GeneralPost, videoParams: VideoParams) => {
	return new Promise((res, rej) => {
		ffmpeg(post.url)
			.setFfmpegPath(ffmpegPath.path)
			.videoCodec('libx264')
			.addInput(post.audio)
			.on('error', function (err: IError) {
				rej('An error occurred: ' + err.message)
			})
			.save(videoParams.downloadedFilePath)
			.on('end', () => {
				res(null)
				sendLogInfo('Video/audio have been downloaded and merged.')
			})
	})
}

const downloadThumbnail = (post: GeneralPost, videoParams: VideoParams) => {
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
