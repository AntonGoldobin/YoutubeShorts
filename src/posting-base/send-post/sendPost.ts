import _ from 'lodash'
import { downloadVideoAndMerge } from './downloadVideoAndMerge'
import { Config, GeneralPost, VideoParams } from '../types/types'
import { loginToYoutube} from './youtube/loginToYoutube'
import { uploadToYoutube } from './youtube/uploadToYoutube'
import { setVideoParams } from './setVideoParams'


export const sendPost = async (post: GeneralPost, config: Config) => {
	console.log('sendPost()')

	const videoParams = await setVideoParams(post)

	await downloadVideoAndMerge(post, videoParams)

	const auth = await loginToYoutube(config)

	await uploadToYoutube(auth, config, post, videoParams)

}
