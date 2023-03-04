import { IConfig, IRedditPost, IGeneralPost } from '../../types/types'
import { sendLogInfo } from '../../utils/debugging'
import { ITikTokPost } from '../../types/ITikTokPost'
import { convertRedditPosts } from './convertReddit'
import { convertTiktokPosts } from './convertTikTok'

export const convertToGeneralPosts = (
	posts: ITikTokPost[] | IRedditPost[],
	config: IConfig,
): IGeneralPost[] => {
	sendLogInfo('starts convertToGeneral()')

	let postsArray: IGeneralPost[] = []

	if (!posts || posts.length === 0) return postsArray

	if (config.contentType === 'reddit') {
		postsArray = convertRedditPosts(posts as IRedditPost[])
	} else {
		postsArray = convertTiktokPosts(posts as ITikTokPost[])
	}

	return postsArray
}