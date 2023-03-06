import _ from 'lodash'
import { downloadVideoAndPrepare } from './downloadVideo'
import { IConfig, IGeneralPost } from '../types/types'
import { loginToYoutube } from './youtube/loginToYoutube'
import { uploadToYoutube } from './youtube/uploadToYoutube'
import { setVideoParams } from './setVideoParams'
import { sendLogInfo } from '../utils/debugging'

export const sendPosts = async (posts: IGeneralPost[], config: IConfig) => {
	sendLogInfo('starts loginToYoutube()')
	const auth = await loginToYoutube(config)

	//Post uploading schedule
	const uploadsCount = config.uploadCount ? config.uploadCount : 1
	for (let i = 0; i < uploadsCount; i++) {
		await sendPost(posts[i], config, auth)
	}
}

export const sendPost = async (post: IGeneralPost, config: IConfig, auth: any) => {
	sendLogInfo('sendPost()')

	sendLogInfo('starts videoParams()')
	const videoParams = setVideoParams(post)

	sendLogInfo('starts downloadVideoAndMerge()')
	await downloadVideoAndPrepare(post, videoParams, config)

	sendLogInfo('startsuploadToYoutube()')
	await uploadToYoutube(auth, config, post, videoParams)
}
