import axios from 'axios'
import { Config, TikTokPost } from '@src/posting-base/types/types'
import * as _ from 'lodash'
import { sendLogInfo } from '../utils/debugging'

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
): Promise<TikTokPost[]> => {
	try {
		const response: ITikTokResponse = await axios.get(options.url, {
			params: options.params,
		})
		const posts: TikTokPost[] = response?.data?.feed
		return posts
	} catch (err: unknown) {
		sendLogInfo('getTikTokPosts():', err)
		return []
	}
}
