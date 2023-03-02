import _ from 'lodash'
import { downloadVideoAndPrepare } from './downloadVideo'
import { Config, GeneralPost } from '../types/types'
import { loginToYoutube } from './youtube/loginToYoutube'
import { uploadToYoutube } from './youtube/uploadToYoutube'
import { setVideoParams } from './setVideoParams'
import { sendLogInfo } from '../utils/debugging'

export const sendPost = async (post: GeneralPost, config: Config) => {	
	sendLogInfo('sendPost()')

	sendLogInfo('starts videoParams()')
	const videoParams = setVideoParams(post)

	sendLogInfo('starts downloadVideoAndMerge()')
	await downloadVideoAndPrepare(post, videoParams, config)

	sendLogInfo('starts loginToYoutube()')
	const auth = await loginToYoutube(config)

	sendLogInfo('startsuploadToYoutube()')
	uploadToYoutube(auth, config, post, videoParams)
}
