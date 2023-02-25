import { Config, RedditPost, TikTokPost, GeneralPost } from '../types/types'
import path from 'path'

export const convertToGeneralPosts = (
	posts: TikTokPost[] | RedditPost[],
	config: Config,
): GeneralPost[] => {
	const postsArray: GeneralPost[] = []

	if (config.contentType === 'reddit') {
		const redditPosts = posts as RedditPost[]
		redditPosts.map((post: RedditPost) => {
			//Getting video's ID
			const videoId = path.parse(post.url).name

			const currentPost: GeneralPost = {
				url: getRedditMediaUrl(post),
				id: videoId,
				thumbnail: post.thumbnail,
				is_adult: post.over_18,
				created: post.created,
				is_video: isVideoCorrect(post),
				audio: `https://v.redd.it/${videoId}/DASH_audio.mp4`,
			}

			postsArray.push(currentPost)
		})
	}

	return postsArray
}

const getRedditMediaUrl = (post: RedditPost) => {
	return post.is_video ? post.media.reddit_video.fallback_url : post.url
}

const isVideoCorrect = (post: RedditPost): boolean => {
	if (!post.is_video) return false
	const isMobile =
		post.media.reddit_video.width < post.media.reddit_video.height
	const isGif = post.media.reddit_video.is_gif
	const isShortDuration = post.media.reddit_video.duration > 15
	const isLongDuration = post.media.reddit_video.duration < 60

	return isMobile && !isGif && !isLongDuration && !isShortDuration
}
