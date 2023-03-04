export interface IConfig {
	channelName: string
	contentType: string
	youtubeLoginToken: any
	youtubeVideoTitle: string
	youtubeVideoDescription: string
	youtubeVideoTags: string[]
	categoryId: number
	youtubeSecret: any

	snoowrapClientId?: string | undefined
	snoowrapSecret?: string | undefined
	snoowrapToken?: string | undefined
	redditPostLimit?: number

	tiktokMocked?: boolean
	tiktok_key?: string	
	tiktok_keyword?: string

	uploadCount?: number

	videoOnly: boolean
	isAdult: boolean

	scheduleRepeats: number | 'all'
	cron: string

	thumbnailLogo?: string
}

export interface IPostId {
	postId: string | number
}

export interface IVideoParams {
	videoId: string
	filePath: string
	downloadedFolderPath: string
	downloadedFilePath: string
	downloadedThumbnailPath: string
}

export interface IAuthCredentials {
	web: IAuthCredentialsWeb
}

interface IAuthCredentialsWeb {
	client_secret: string
	client_id: string
	redirect_uris: string[] | null
}

export interface IRedditPost {
	approved_at_utc: null
	subreddit: string
	selftext: string
	author_fullname: string
	saved: boolean
	mod_reason_title: null
	gilded: number
	clicked: boolean
	title: string
	link_flair_richtext: string[]
	subreddit_name_prefixed: string
	hidden: boolean
	pwls: number
	link_flair_css_class: string
	downs: number
	thumbnail_height: number
	top_awarded_type: null
	hide_score: boolean
	name: string
	quarantine: boolean
	link_flair_text_color: string
	upvote_ratio: number
	author_flair_background_color: null
	subreddit_type: string
	ups: number
	total_awards_received: number
	media_embed: any
	thumbnail_width: number
	author_flair_template_id: null
	is_original_content: boolean
	user_reports: any[]
	secure_media: null
	is_reddit_media_domain: boolean
	is_meta: boolean
	category: null
	secure_media_embed: any
	link_flair_text: null
	can_mod_post: boolean
	score: number
	approved_by: null
	is_created_from_ads_ui: boolean
	author_premium: boolean
	thumbnail: string
	edited: boolean
	author_flair_css_class: null
	author_flair_richtext: any[]
	gildings: any
	post_hint: string
	content_categories: null
	is_self: boolean
	mod_note: null
	created: number
	link_flair_type: string
	wls: 6
	removed_by_category: any
	banned_by: any
	author_flair_type: string
	domain: string
	allow_live_comments: boolean
	selftext_html: any
	likes: any
	suggested_sort: any
	banned_at_utc: any
	url_overridden_by_dest: string
	view_count: any
	archived: boolean
	no_follow: boolean
	is_crosspostable: boolean
	pinned: boolean
	over_18: boolean
	preview: IRedditPreview
	all_awardings: any[]
	awarders: any[]
	media_only: boolean
	can_gild: boolean
	spoiler: boolean
	locked: boolean
	author_flair_text: any
	treatment_tags: any[]
	visited: boolean
	removed_by: any
	num_reports: any
	distinguished: any
	subreddit_id: string
	author_is_blocked: boolean
	mod_reason_by: any
	removal_reason: any
	link_flair_background_color: string
	id: string
	is_robot_indexable: boolean
	report_reasons: any
	author: string
	discussion_type: any
	num_comments: number
	send_replies: boolean
	whitelist_status: string
	contest_mode: boolean
	mod_reports: any[]
	author_patreon_flair: boolean
	author_flair_text_color: any
	permalink: string
	parent_whitelist_status: string
	stickied: boolean
	url: string
	subreddit_subscribers: number
	created_utc: number
	num_crossposts: number
	media: IRedditMedia
	is_video: boolean
	comments: any[]
}

interface IRedditPreview {
	images: IRedditPreviewImages[]
	enabled: boolean
}

interface IRedditPreviewImages {
	source: IRedditPreviewSize
	resolutions: IRedditPreviewSize[]
	variants: any
	id: string
}

interface IRedditPreviewSize {
	url: string
	width: number
	height: number
}

interface IRedditMedia {
	reddit_video: IRedditMediaVideo
}

interface IRedditMediaVideo {
	bitrate_kbps: number
	fallback_url: string
	height: number
	width: number
	scrubber_media_url: string
	dash_url: string
	duration: number
	hls_url: string
	is_gif: boolean
	transcoding_status: string
}

export interface IGeneralPost {
	url: string
	id: string
	is_adult: boolean
	created: string | number
	audio: string | null
	duration: number
}

export interface IRequest {
	body: IConfig
}
