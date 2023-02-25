import axios from 'axios'
import { Config, TikTokPost } from '@src/posting-base/types/types'
import * as _ from 'lodash'

interface ITikTokResponse {
	data: {
		feed: TikTokPost[]
	}
}

const options = {
	method: 'GET',
	url: 'https://tiktok-bulletproof.p.rapidapi.com/user-feed',
	params: { username: 'betyoucantfollowme1' },
	headers: {
		'X-RapidAPI-Key': process.env.TIK_TOK_KEY,
		'X-RapidAPI-Host': 'tiktok-bulletproof.p.rapidapi.com',
	},
}

export const getTikTokPosts = async (
	config: Config,
): Promise<TikTokPost[] | null> => {
	try {
		const response: ITikTokResponse = await axios.get(options.url, {
			params: options.params,
		})
		const posts: TikTokPost[] = response?.data?.feed
		return posts
	} catch (err: unknown) {
		console.log('getTikTokPosts():', err)
		return null
	}
}
