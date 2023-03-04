import { IGeneralPost, IVideoParams } from '../types/types'
import path from 'path'
import { sendLogInfo } from '../utils/debugging'

export const setVideoParams = (post: IGeneralPost): IVideoParams => {
	//Video params
	const fileName = `${post.id}.mp4`
	const thumbnailName = `${post.id}.png`
	const filePath = `../downloaded-files/${fileName}`
	const downloadedFolderPath = path.join(__dirname, '../downloaded-files/')

	const downloadedFilePath = downloadedFolderPath + fileName

	//Thumbnail params
	const downloadedThumbnailPath = downloadedFolderPath + thumbnailName

	sendLogInfo('setVideoParams.ts: videoParams have been created')
	return {
		videoId: post.id,
		filePath: filePath,
		downloadedFolderPath: downloadedFolderPath,
		downloadedFilePath: downloadedFilePath,
		downloadedThumbnailPath: downloadedThumbnailPath,
	}
}
