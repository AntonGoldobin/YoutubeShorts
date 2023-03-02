import * as fsExtra from 'fs-extra'
import fs from 'fs'
import { VideoParams } from '../types/types'
import path from 'path'
import { sendLogInfo } from './debugging'

export const clearDownloadFolder = () => {
	fsExtra
		.emptyDir(path.join(__dirname, '../downloaded-files/'))
		.then(() => {
			sendLogInfo('Old downloaded files have been deleted')
		})
		.catch((err: unknown) => {
			sendLogInfo('clearDownloadFolder error: ' + err)
		})
	fs.mkdir('../downloaded-files/', { recursive: true }, (err) => {
		if (err) throw err
	})
}

export const removeVideoContent = (videeParams: VideoParams) => {
	removeFile(videeParams.downloadedFilePath)
	removeFile(videeParams.downloadedThumbnailPath)
	sendLogInfo('Temporary files have been deleted')
}

export const removeFile = (path: string) => {
	fs.unlink(path, (err) => {
		if (err) {
			console.error(err)
			return
		}
	})
}
