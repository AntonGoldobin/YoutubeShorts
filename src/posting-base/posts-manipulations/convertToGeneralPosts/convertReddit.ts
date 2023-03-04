import { IRedditPost, IGeneralPost } from '../../types/types'
import path from 'path'

export const convertRedditPosts = (posts: IRedditPost[]): IGeneralPost[] => {
	const convertedPosts: IGeneralPost[] = []

	posts.map((post: IRedditPost) => {
		//Filter by video
		if (!isRedditVideoCorrect(post)) {
			return
		}

		//Getting video's ID
		const videoId = path.parse(post.url).name

		const currentPost: IGeneralPost = {
			url: post.media.reddit_video.fallback_url,
			id: videoId,
			is_adult: post.over_18,
			created: post.created,
			audio: `https://v.redd.it/${videoId}/DASH_audio.mp4`,
			duration: post.media.reddit_video.duration,
		}

		convertedPosts.push(currentPost)
	})

	return convertedPosts
}

const isRedditVideoCorrect = (post: IRedditPost): boolean => {
	if (!post.is_video) return false

	const isMobile =
		post.media.reddit_video.width < post.media.reddit_video.height
	const isGif = post.media.reddit_video.is_gif
	const isShortDuration = post.media.reddit_video.duration < 15
	const isLongDuration = post.media.reddit_video.duration > 60

	return isMobile && !isGif && !isLongDuration && !isShortDuration
}
