import _ from 'lodash'
import { downloadVideoAndMerge } from './downloadVideoAndMerge'
import { Config, GeneralPost } from '../types/types'
import { loginToYoutube } from './youtube/loginToYoutube'
import { uploadToYoutube } from './youtube/uploadToYoutube'
import { setVideoParams } from './setVideoParams'

export const sendPost = async (post: GeneralPost, config: Config) => {	
	console.log('sendPost()')

	console.log('starts videoParams()')
	const videoParams = setVideoParams(post)

	console.log('starts downloadVideoAndMerge()')
	await downloadVideoAndMerge(post, videoParams)

	console.log('starts loginToYoutube()')
	const auth = await loginToYoutube(config)

	console.log('startsuploadToYoutube()')
	uploadToYoutube(auth, config, post, videoParams)
}
