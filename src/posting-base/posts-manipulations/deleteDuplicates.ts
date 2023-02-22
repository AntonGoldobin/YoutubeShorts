import { Config, GeneralPost } from '../types/types'
import { getPostsIds } from '@src/db/models/getPostsId'
import { PostId } from '../types/types'
import * as _ from 'lodash'

// ****
// DELETING DUBLICATES
// ****

export const deleteDuplicates = async (newPosts: GeneralPost[], config: Config): Promise<GeneralPost[]> => {
	// Getting all post IDs from DB
	try {
		const postsIds: PostId[] = await getPostsIds(config) as PostId[]
		
		const uniqPosts: GeneralPost[] = await _.differenceWith(
			newPosts,
			postsIds,
			(post: GeneralPost, record: PostId) => post.id == record.postId,
		)
		return uniqPosts
	} catch (err) {
		console.log('Golden Antelope, deleteDuplicates: ' + err)
		return err
	}
}
