import { GeneralPost, VideoParams } from "../types/types"
import path  from 'path'

export const setVideoParams = (post: GeneralPost): VideoParams => {
	//Video params
	const fileName = `${post.id}.mp4`
	const filePath = `../downloaded-files/${fileName}`
	const downloadedFilePath = path.join(
		__dirname,
		'../downloaded-files/',
		fileName,
	)

	//Thumbnail params
	const re = /(?:\.([^.]+))?$/;
	const imageExtention = re.exec(post.thumbnail)
	const thumbnailName = `${post.id}${imageExtention ? imageExtention[0] : ".jpg"}`
	const downloadedThumbnailPath = path.join(
		__dirname,
		'../downloaded-files/',
		thumbnailName,
	)
	console.log('setVideoParams.ts: videoParams have been created')
	return {
		videoId: post.id,
		filePath: filePath,
		downloadedFilePath: downloadedFilePath,
		thumbnailName: thumbnailName,
		downloadedThumbnailPath: downloadedThumbnailPath,
	}
}