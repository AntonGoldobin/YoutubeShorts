import ffmpegPath from '@ffmpeg-installer/ffmpeg'
import ffmpeg from 'fluent-ffmpeg'
import { GeneralPost, VideoParams } from '../types/types'
import client from 'https'
import fs from 'fs'

export const downloadVideoAndMerge = (
	post: GeneralPost,
	videoParams: VideoParams,
) => {
	return Promise.all([
		downloadVideo(post, videoParams),
		downloadThumbnail(post, videoParams),
	])
}

const downloadVideo = (post: GeneralPost, videoParams: VideoParams) => {
	return new Promise((res, rej) => {
		ffmpeg(post.url)
			.setFfmpegPath(ffmpegPath.path)
			.videoCodec('libx264')
			.addInput(post.audio)
			.on('error', function (err: any) {
				rej('An error occurred: ' + err.message)
			})
			.on('end', function () {
				res(console.log('Video/audio have been downloaded and merged.'))
			})
			.save(videoParams.downloadedFilePath)
	})
}

const downloadThumbnail = (post: GeneralPost, videoParams: VideoParams) => {

	return new Promise((resolve, reject) => {
		client.get(post.thumbnail, (res) => {
			if (res.statusCode === 200) {
				res
					.pipe(fs.createWriteStream(videoParams.downloadedThumbnailPath))
					.on('error', reject)
					.once('close', () => resolve(console.log('Thumbnail has been downloaded.')))
			} else {
				// Consume response data to free up memory
				res.resume()
				reject(
					new Error(
						`Getting Thumbnail Request Failed With a Status Code: ${res.statusCode}`,
					),
				)
			}
		})
	})
}
