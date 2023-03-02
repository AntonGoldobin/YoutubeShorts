import { Config, GeneralPost, RedditPost } from './types/types'
import { getPosts } from './get-posts/getPosts'
import { deleteDuplicates } from './posts-manipulations/deleteDuplicates'
import { TikTokPost } from './types/types'
import { sendPost } from './send-post/sendPost'

import { clearDownloadFolder } from './utils/utils'
import { convertToGeneralPosts } from './posts-manipulations/convertToGeneralPosts'

export const postingBase = async (config: Config | null | undefined) => {
	if (!config) return

	try {
		//Get posts
		const posts: TikTokPost[] | RedditPost[] = await getPosts(config)

		if (posts?.length === 0) return

		//Convert tiktok and reddit response to general type objects
		const generalTypePosts: GeneralPost[] = convertToGeneralPosts(posts, config)

		//Filter posts that not included on db yet
		const uniqPosts: GeneralPost[] = await deleteDuplicates(
			generalTypePosts,
			config,
		)

		if (uniqPosts.length === 0) return

		//Send post
		await sendPost(uniqPosts[0], config)
	} catch (err: unknown) {
		throw new Error(err as string)
	}
}
