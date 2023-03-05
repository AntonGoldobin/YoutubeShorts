import { IGeneralPost } from '../../types/types'
import { ITikTokPost } from '../../types/ITikTokPost'


export const convertTiktokPosts = (posts: ITikTokPost[]): IGeneralPost[] => {
	console.log('starts conver tiktoks')

	const convertedPosts: IGeneralPost[] = []

	posts.map((post: ITikTokPost) => {
		//Filter by video
		if (!isTiktokVideoCorrect(post)) {
			return
		}

		const videoParams = post?.aweme_info?.video

		const currentPost: IGeneralPost = {
			url: videoParams?.download_addr?.url_list[2],
			id: post?.provider_doc_id_str,
			is_adult: post?.aweme_info?.rate < 18,
			created: post?.aweme_info?.create_time,
			audio: null,
			duration: videoParams?.duration / 1000,
		}
		convertedPosts.push(currentPost)
	})

	return convertedPosts
}

const isTiktokVideoCorrect = (post: ITikTokPost): boolean => {

	const videoParams = post?.aweme_info?.video
	const duration = videoParams?.duration / 1000

	const isShortDuration = duration < 15
	const isLongDuration = duration > 60

	return !isLongDuration && !isShortDuration
}