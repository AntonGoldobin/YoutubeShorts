import { IConfig, IGeneralPost } from '../types/types'
import { getPostsIds } from '@src/db/models/getPostsId'
import { IPostId } from '../types/types'
import * as _ from 'lodash'
import { sendLogInfo } from '../utils/debugging'

// ****
// DELETING DUBLICATES
// ****

export const deleteDuplicates = async (newPosts: IGeneralPost[], config: IConfig): Promise<IGeneralPost[]> => {
	sendLogInfo('starts deleteDuplicates()')
	// Getting all post IDs from DB
	try {
		const postsIds: IPostId[] = await getPostsIds(config) as IPostId[]
		
		const uniqPosts: IGeneralPost[] = await _.differenceWith(
			newPosts,
			postsIds,
			(post: IGeneralPost, record: IPostId) => post.id == record.postId,
		)
		return uniqPosts
	} catch (err) {
		sendLogInfo('Golden Antelope, deleteDuplicates: ', err)
		return []
	}
}
