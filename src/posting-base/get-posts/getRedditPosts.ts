import { Config } from '../types/types'
import fs from 'fs'

// const snoowrap = require('snoowrap')
import snoowrap, {Submission} from 'snoowrap'

export const getRedditPosts = async(config: Config) => {
	const r = new snoowrap({
		userAgent:
			'Hello, I need to create this app for my nodejs server for posting images from reddit to my telegram channel',
		clientId: config.snoowrapClientId,
		clientSecret: config.snoowrapSecret,
		refreshToken: config.snoowrapToken,
	})

	try {
		const posts:Submission[] = await r.getBest({limit: config.redditPostLimit })
		const resData = await JSON.stringify(posts)
		await fs.writeFile('src/saved-responses/redditResponse.json', resData, 'utf8', () => console.log('json has been saved'));
		return await posts
	} catch (err: unknown) {
		console.log('GoldenAntelope, getRedditPosts.ts: ' + err)
	}
}

