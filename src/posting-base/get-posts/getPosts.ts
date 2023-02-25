import { Config, RedditPost, TikTokPost } from '@src/posting-base/types/types'
import * as _ from 'lodash'
import { getRedditPosts } from './getRedditPosts'
import { getTikTokPosts } from './getTikTokPosts'

export const getPosts = async (
	config: Config,
): Promise<TikTokPost[] | RedditPost[] | null> => {
	const getRemotePosts =
		config.contentType === 'reddit' ? getRedditPosts : getTikTokPosts

	try {
		const posts: TikTokPost[] | RedditPost[] | null = await getRemotePosts(
			config,
		)
		return posts
	} catch (err) {
		console.log('getPosts():', err)
		return null
	}
}
