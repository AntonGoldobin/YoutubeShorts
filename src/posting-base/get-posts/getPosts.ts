import { IConfig, IRedditPost } from '@src/posting-base/types/types'
import * as _ from 'lodash'
import { ITikTokPost } from '../types/ITikTokPost'
import { sendLogInfo } from '../utils/debugging'
import { getRedditPosts } from './getRedditPosts'
import { getTikTokPosts } from './getTikTokPosts'

export const getPosts = async (
	config: IConfig,
): Promise<ITikTokPost[] | IRedditPost[]> => {
	sendLogInfo('starts getPosts()')

	const getRemotePosts =
		config.contentType === 'reddit' ? getRedditPosts : getTikTokPosts

	try {
		const posts: ITikTokPost[] | IRedditPost[] = await getRemotePosts(
			config,
		)
		return posts
	} catch (err: unknown) {
		sendLogInfo('getPosts():', err)
		return []
	}
}
