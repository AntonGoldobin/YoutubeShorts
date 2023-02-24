import axios from 'axios'
import { Config, TikTokPost} from '@src/posting-base/types/types'
import * as _ from 'lodash'


const options = {
	method: 'GET',
	url: 'https://tiktok-bulletproof.p.rapidapi.com/user-feed',
	params: { username: 'betyoucantfollowme1' },
	headers: {
		'X-RapidAPI-Key': process.env.TIK_TOK_KEY,
		'X-RapidAPI-Host': 'tiktok-bulletproof.p.rapidapi.com',
	},
}

export const getTikTokPosts = async (config: Config) => {
	try {
		const response = await axios.get(options.url, {params: options.params})
		const posts: TikTokPost[] = await response?.data?.feed
		return posts
	} catch(err) {
		return err
	}
}
