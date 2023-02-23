import * as fsExtra from 'fs-extra'
import fs from "fs"
import { VideoParams } from './types/types'

export const clearDownloadFolder = () => {
	fsExtra
		.emptyDir('src/posting-base/downloaded-files/')
		.then(() => {
			console.log('Old downloaded files have been deleted')
		})
		.catch((err: unknown) => {
			console.log('clearDownloadFolder error: ' + err)
		})
}

export const removeVideoContent = (videeParams: VideoParams) => {
	removeFile(videeParams.downloadedFilePath)
	removeFile(videeParams.downloadedThumbnailPath)
	console.log('Temporary files have been deleted')
}

export const removeFile = (path: string) => {
	fs.unlink(path, (err) => {
		if (err) {
			console.error(err);
			return;
		}
	});
};