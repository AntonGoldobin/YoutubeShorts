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
		const posts: TikTokPost[] | RedditPost[] = await getPosts(config)
		//Convert tiktok and reddit response to general type objects
		const generalTypePosts: GeneralPost[] = await convertToGeneralPosts(posts, config)
		//Filter posts that not included on db yet
		let uniqPosts: GeneralPost[] = await deleteDuplicates(generalTypePosts, config)
		//Filter posts by video
		const uniqVideoPosts = await uniqPosts.filter(post => post.is_video)
		//Send post
		await sendPost(uniqVideoPosts[0], config)
	} catch (err) {
		throw new Error('Golden Antelope: postingBase.ts ' + err)
	}
}
