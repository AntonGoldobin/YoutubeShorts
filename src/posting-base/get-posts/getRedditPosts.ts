import { IConfig, IRedditPost } from '../types/types'
import fs from 'fs'

import snoowrap from 'snoowrap'
import { sendLogInfo } from '../utils/debugging'

export const getRedditPosts = async (
	config: IConfig,
): Promise<IRedditPost[]> => {
	const r = new snoowrap({
		userAgent:
			// eslint-disable-next-line max-len
			'Hello, I need to create this app for my nodejs server for posting images from reddit to my telegram channel',
		clientId: config.snoowrapClientId,
		clientSecret: config.snoowrapSecret,
		refreshToken: config.snoowrapToken,
	})

	try {
		const posts: unknown = await r.getBest({
			limit: config.redditPostLimit,
		})
		const resData = JSON.stringify(posts)
		fs.writeFile(
			'src/saved-responses/redditResponse.json',
			resData,
			'utf8',
			() => sendLogInfo('json has been saved'),
		)
		return posts as IRedditPost[]
	} catch (err: unknown) {
		sendLogInfo('GoldenAntelope, getRedditPosts.ts: ', err)
		return []
	}
}
