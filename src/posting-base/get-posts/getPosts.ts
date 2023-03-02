import { Config, RedditPost, TikTokPost } from '@src/posting-base/types/types'
import * as _ from 'lodash'
import { sendLogInfo } from '../utils/debugging'
import { getRedditPosts } from './getRedditPosts'
import { getTikTokPosts } from './getTikTokPosts'

export const getPosts = async (
	config: Config,
): Promise<TikTokPost[] | RedditPost[]> => {
	sendLogInfo('starts getPosts()')

	const getRemotePosts =
		config.contentType === 'reddit' ? getRedditPosts : getTikTokPosts

	try {
		const posts: TikTokPost[] | RedditPost[] = await getRemotePosts(
			config,
		)
		return posts
	} catch (err: unknown) {
		sendLogInfo('getPosts():', err)
		return []
	}
}
