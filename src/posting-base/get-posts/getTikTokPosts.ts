import axios, { AxiosRequestConfig } from 'axios'
import { IConfig } from '@src/posting-base/types/types'
import * as _ from 'lodash'
import { sendLogInfo } from '../utils/debugging'
import fs from 'fs'
import path from 'path'
import mockData from '../saved-responses/tiktokResponse.json'
import { ITikTokPost } from '../types/ITikTokPost'

interface ITikTokResponse {
	data: {
		data: ITikTokPost[]
	}
}

export const getTikTokPosts = async (
	config: IConfig,
): Promise<ITikTokPost[]> => {
	const options: AxiosRequestConfig = {
		method: 'GET',
		url: 'https://scraptik.p.rapidapi.com/search',
		params: {
			keyword: config.tiktok_keyword ? config.tiktok_keyword : 'funny',
			count: '20',
			offset: '0',
			use_filters: '0',
			publish_time: '7',
			sort_type: '0',
		},
		headers: {
			'X-RapidAPI-Key': config.tiktok_key ? config.tiktok_key : '',
			'X-RapidAPI-Host': config.tiktok_host ? config.tiktok_host : '',
		},
	}

	try {
		if (!config.tiktokMocked) {
			const response: ITikTokResponse = await axios.request(options)
			const posts: ITikTokPost[] = response?.data?.data

			fs.writeFile(
				path.join(__dirname, '../saved-responses/tiktokResponse.json'),
				JSON.stringify(posts),
				'utf8',
				() => sendLogInfo('json has been saved'),
			)

			return posts
		} else {
			return mockData as ITikTokPost[]
		}
	} catch (err: unknown) {
		sendLogInfo('getTikTokPosts():', err)
		return []
	}
}
