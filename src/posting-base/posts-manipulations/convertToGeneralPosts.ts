import { Config, RedditPost, TikTokPost, GeneralPost } from '../types/types'
import path from 'path'
import { sendLogInfo } from '../utils/debugging'

export const convertToGeneralPosts = (
	posts: TikTokPost[] | RedditPost[],
	config: Config,
): GeneralPost[] => {
	sendLogInfo('starts convertToGeneral()')

	const postsArray: GeneralPost[] = []

	if(!posts || posts.length === 0) return postsArray

	if (config.contentType === 'reddit') {
		const redditPosts = posts as RedditPost[]

		redditPosts.map((post: RedditPost) => {
			//Filter by video
			if (!isVideoCorrect(post)) {
				return
			}

			//Getting video's ID
			const videoId = path.parse(post.url).name

			const currentPost: GeneralPost = {
				url: post.media.reddit_video.fallback_url,
				id: videoId,
				thumbnail: post.thumbnail,
				is_adult: post.over_18,
				created: post.created,
				audio: `https://v.redd.it/${videoId}/DASH_audio.mp4`,
				duration: post.media.reddit_video.duration,
			}

			postsArray.push(currentPost)
		})
	}

	return postsArray
}

const isVideoCorrect = (post: RedditPost): boolean => {
	if(!post.is_video) return false

	const isMobile =
		post.media.reddit_video.width < post.media.reddit_video.height
	const isGif = post.media.reddit_video.is_gif
	const isShortDuration = post.media.reddit_video.duration < 15
	const isLongDuration = post.media.reddit_video.duration > 60

	return isMobile && !isGif && !isLongDuration && !isShortDuration
}
