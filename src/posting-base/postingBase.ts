import { Config, GeneralPost, RedditPost } from './types/types'
import { getPosts } from './get-posts/getPosts'
import { deleteDuplicates } from './posts-manipulations/deleteDuplicates'
import { TikTokPost } from './types/types'
import { sendPost } from './send-post/sendPost'

import { clearDownloadFolder } from './utils'
import { convertToGeneralPosts } from './posts-manipulations/convertToGeneralPosts'

export const postingBase = async (config: Config | null | undefined) => {
	if (!config) return

	//Clear all downloaded files
	clearDownloadFolder()

	try {
		//Get posts
		console.log('starts getPosts()')
		const posts: TikTokPost[] | RedditPost[] | null = await getPosts(config)

		if (!posts) return

		//Convert tiktok and reddit response to general type objects
		console.log('starts convertToGeneral()')
		const generalTypePosts: GeneralPost[] = convertToGeneralPosts(posts, config)
		//Filter posts that not included on db yet
		console.log('starts deleteDuplicates()')
		const uniqPosts: GeneralPost[] = await deleteDuplicates(
			generalTypePosts,
			config,
		)
		//Filter posts by video
		console.log('starts filter uniqPosts by video')
		const uniqVideoPosts = uniqPosts.filter((post) => post.is_video)
		//Send post
		await sendPost(uniqVideoPosts[0], config)
	} catch (err: unknown) {
		throw new Error(err as string)
	}
}
