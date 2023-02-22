import axios from 'axios'
import { Config, TikTokPost} from '@src/posting-base/types/types'
import * as _ from 'lodash'


const options = {
	method: 'GET',
	url: 'https://tiktok-bulletproof.p.rapidapi.com/user-feed',
	params: { username: 'betyoucantfollowme1' },
	headers: {
		'X-RapidAPI-Key': '3acb5928e3msh33feefc3dd5671dp18984ejsnc114f20aef67',
		'X-RapidAPI-Host': 'tiktok-bulletproof.p.rapidapi.com',
	},
}

export const getTikTokPosts = async (config: Config) => {
	try {
		const response = await axios.request(options)
		const posts: TikTokPost[] = await response?.data?.feed
		return posts
	} catch(err) {
		return err
	}
}
