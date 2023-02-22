import axios from 'axios'
import { Config } from '@src/posting-base/types/types'
import * as _ from 'lodash'
import { getRedditPosts } from './getRedditPosts'
import { getTikTokPosts } from './getTikTokPosts'


export const getPosts = async (config: Config) => {
	const getRemotePosts = config.contentType === "reddit" ? getRedditPosts : getTikTokPosts

	try {
		const posts = await getRemotePosts(config)
		return posts
	} catch(err) {
		return err
	}
}
