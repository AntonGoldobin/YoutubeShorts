import { IConfig, IGeneralPost, IRedditPost } from './types/types'
import { getPosts } from './get-posts/getPosts'
import { deleteDuplicates } from './posts-manipulations/deleteDuplicates'
import { sendPosts } from './send-post/sendPosts'
import { convertToGeneralPosts } from './posts-manipulations/convertToGeneralPosts/convertToGeneralPosts'
import { ITikTokPost } from './types/ITikTokPost'

export const postingBase = async (config: IConfig | null | undefined) => {
	if (!config) return

	try {
		//Get posts
		const posts: ITikTokPost[] | IRedditPost[] = await getPosts(config)

		if (posts?.length === 0) return

		//Convert tiktok and reddit response to general type objects
		const generalTypePosts: IGeneralPost[] = convertToGeneralPosts(posts, config)

		//Filter posts that not included on db yet
		const uniqPosts: IGeneralPost[] = await deleteDuplicates(
			generalTypePosts,
			config,
		)
		if (uniqPosts.length === 0) return

		//Send post
		await sendPosts(uniqPosts, config)
	} catch (err: unknown) {
		throw new Error(err as string)
	}
}
