export interface Avatar168x168 {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface Avatar300x300 {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface AvatarLarger {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface AvatarMedium {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface AvatarThumb {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface SpecialAccount {
	special_account_list?: any
}

export interface VideoIcon {
	height: number
	uri: string
	url_list: any[]
	width: number
}

export interface Author {
	accept_private_policy: boolean
	account_labels?: any
	ad_cover_url?: any
	advance_feature_item_order?: any
	advanced_feature_info?: any
	authority_status: number
	avatar_168x168: Avatar168x168
	avatar_300x300: Avatar300x300
	avatar_larger: AvatarLarger
	avatar_medium: AvatarMedium
	avatar_thumb: AvatarThumb
	avatar_uri: string
	aweme_count: number
	bold_fields?: any
	can_message_follow_status_list?: any
	can_set_geofencing?: any
	cha_list?: any
	comment_filter_status: number
	comment_setting: number
	commerce_user_level: number
	cover_url?: any
	custom_verify: string
	cv_level: string
	download_prompt_ts: number
	enterprise_verify_reason: string
	events?: any
	fb_expire_time: number
	follow_status: number
	follower_count: number
	follower_status: number
	followers_detail?: any
	following_count: number
	friends_status: number
	geofencing?: any
	hide_search: boolean
	homepage_bottom_toast?: any
	ins_id: string
	is_ad_fake: boolean
	is_block: boolean
	is_discipline_member: boolean
	is_star: boolean
	item_list?: any
	live_agreement: number
	live_commerce: boolean
	live_verify: number
	mention_status: number
	mutual_relation_avatars?: any
	name_field: string
	need_points?: any
	need_recommend: number
	nickname: string
	platform_sync_info?: any
	prevent_download: boolean
	relative_users?: any
	room_id: number
	search_highlight?: any
	search_user_desc: string
	search_user_name: string
	sec_uid: string
	secret: number
	shield_comment_notice: number
	shield_digg_notice: number
	shield_edit_field_info?: any
	shield_follow_notice: number
	short_id: string
	show_image_bubble: boolean
	special_account: SpecialAccount
	special_lock: number
	status: number
	stitch_setting: number
	total_favorited: number
	type_label?: any
	uid: string
	unique_id: string
	user_canceled: boolean
	user_mode: number
	user_period: number
	user_profile_guide?: any
	user_rate: number
	user_tags?: any
	verification_type: number
	verify_info: string
	video_icon: VideoIcon
	white_cover_url?: any
	with_commerce_entry: boolean
	with_shop_entry: boolean
}

export interface DownloadGeneral {
	code: number
	mute: boolean
	show_type: number
	transcode: number
}

export interface DownloadMaskPanel {
	code: number
	mute: boolean
	show_type: number
	transcode: number
}

export interface ShareGeneral {
	code: number
	mute: boolean
	show_type: number
	transcode: number
}

export interface AwemeAcl {
	download_general: DownloadGeneral
	download_mask_panel: DownloadMaskPanel
	platform_list?: any
	share_general: ShareGeneral
	share_list_status: number
}

export interface CcTemplateInfo {
	author_name: string
	clip_count: number
	desc: string
	duration_milliseconds: number
	related_music_id: string
	template_id: string
}

export interface Author2 {
	account_labels?: any
	ad_cover_url?: any
	advance_feature_item_order?: any
	advanced_feature_info?: any
	bold_fields?: any
	can_message_follow_status_list?: any
	can_set_geofencing?: any
	cha_list?: any
	cover_url?: any
	events?: any
	followers_detail?: any
	geofencing?: any
	homepage_bottom_toast?: any
	item_list?: any
	mutual_relation_avatars?: any
	need_points?: any
	platform_sync_info?: any
	relative_users?: any
	search_highlight?: any
	shield_edit_field_info?: any
	type_label?: any
	user_profile_guide?: any
	user_tags?: any
	white_cover_url?: any
}

export interface ExtraAttr {
	is_live: boolean
}

export interface ShareInfo {
	bool_persist: number
	now_invitation_card_image_urls?: any
	share_desc: string
	share_desc_info: string
	share_quote: string
	share_signature_desc: string
	share_signature_url: string
	share_title: string
	share_title_myself: string
	share_title_other: string
	share_url: string
}

export interface ChaList {
	author: Author2
	banner_list?: any
	cha_attrs?: any
	cha_name: string
	cid: string
	collect_stat: number
	connect_music: any[]
	desc: string
	extra_attr: ExtraAttr
	hashtag_profile: string
	is_challenge: number
	is_commerce: boolean
	is_pgcshow: boolean
	schema: string
	search_highlight?: any
	share_info: ShareInfo
	show_items?: any
	sub_type: number
	type: number
	use_count: number
	user_count: number
	view_count: number
}

export interface CommerceInfo {
	adv_promotable: boolean
	auction_ad_invited: boolean
	with_comment_filter_words: boolean
}

export interface GroupIdList {
	GroupdIdList0?: any
	GroupdIdList1?: any
}

export interface AllowCreateSticker {
	status: number
}

export interface InteractPermission {
	allow_adding_to_story: number
	allow_create_sticker: AllowCreateSticker
	duet: number
	duet_privacy_setting: number
	stitch: number
	stitch_privacy_setting: number
	upvote: number
}

export interface LabelTop {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface AvatarMedium2 {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface AvatarThumb2 {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface CoverLarge {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface CoverMedium {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface CoverThumb {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface DurationHighPrecision {
	audition_duration_precision: number
	duration_precision: number
	shoot_duration_precision: number
	video_duration_precision: number
}

export interface MatchedPgcSound {
	author: string
	mixed_author: string
	mixed_title: string
	title: string
}

export interface ChorusInfo {
	duration_ms: number
	start_ms: number
}

export interface CoverMedium2 {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface MatchedSong {
	author: string
	chorus_info: ChorusInfo
	cover_medium: CoverMedium2
	h5_url: string
	id: string
	performers?: any
	title: string
}

export interface PlayUrl {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface StrongBeatUrl {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface Music {
	album: string
	artists: any[]
	audition_duration: number
	author: string
	author_deleted: boolean
	author_position?: any
	avatar_medium: AvatarMedium2
	avatar_thumb: AvatarThumb2
	binded_challenge_id: number
	can_not_reuse: boolean
	collect_stat: number
	commercial_right_type: number
	cover_large: CoverLarge
	cover_medium: CoverMedium
	cover_thumb: CoverThumb
	dmv_auto_show: boolean
	duration: number
	duration_high_precision: DurationHighPrecision
	external_song_info: any[]
	extra: string
	id: number
	id_str: string
	is_audio_url_with_cookie: boolean
	is_author_artist: boolean
	is_commerce_music: boolean
	is_matched_metadata: boolean
	is_original: boolean
	is_original_sound: boolean
	is_pgc: boolean
	is_play_music: boolean
	lyric_short_position?: any
	matched_pgc_sound: MatchedPgcSound
	matched_song: MatchedSong
	mid: string
	multi_bit_rate_play_info?: any
	mute_share: boolean
	offline_desc: string
	owner_handle: string
	owner_id: string
	owner_nickname: string
	play_url: PlayUrl
	position?: any
	prevent_download: boolean
	preview_end_time: number
	preview_start_time: number
	search_highlight?: any
	sec_uid: string
	shoot_duration: number
	source_platform: number
	status: number
	strong_beat_url: StrongBeatUrl
	tag_list?: any
	title: string
	user_count: number
	video_duration: number
}

export interface RiskInfos {
	content: string
	risk_sink: boolean
	type: number
	vote: boolean
	warn: boolean
}

export interface Position {
	begin: number
	end: number
}

export interface SearchHighlight {
	field: string
	positions: Position[]
}

export interface ShareInfo2 {
	bool_persist: number
	now_invitation_card_image_urls?: any
	share_desc: string
	share_desc_info: string
	share_link_desc: string
	share_quote: string
	share_signature_desc: string
	share_signature_url: string
	share_title: string
	share_title_myself: string
	share_title_other: string
	share_url: string
	whatsapp_desc: string
}

export interface Statistics {
	aweme_id: string
	collect_count: number
	comment_count: number
	digg_count: number
	download_count: number
	forward_count: number
	lose_comment_count: number
	lose_count: number
	play_count: number
	share_count: number
	whatsapp_share_count: number
}

export interface ReviewResult {
	review_status: number
}

export interface Status {
	allow_comment: boolean
	allow_share: boolean
	aweme_id: string
	download_status: number
	in_reviewing: boolean
	is_delete: boolean
	is_prohibited: boolean
	private_status: number
	review_result: ReviewResult
	reviewed: number
	self_see: boolean
}

export interface TextExtra {
	end: number
	sec_uid: string
	start: number
	type: number
	user_id: string
	hashtag_id: string
	hashtag_name: string
	is_commerce?: boolean
}

export interface AiDynamicCover {
	uri: string
	url_list: string[]
}

export interface AiDynamicCoverBak {
	uri: string
	url_list: string[]
}

export interface AnimatedCover {
	uri: string
	url_list: string[]
}

export interface PlayAddr {
	data_size: number
	file_cs: string
	file_hash: string
	height: number
	uri: string
	url_key: string
	url_list: string[]
	width: number
}

export interface BitRate {
	HDR_bit: string
	HDR_type: string
	bit_rate: number
	dub_infos?: any
	gear_name: string
	is_bytevc1: number
	play_addr: PlayAddr
	quality_type: number
}

export interface Cover {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface DownloadAddr {
	data_size: number
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface DynamicCover {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface OriginCover {
	height: number
	uri: string
	url_list: string[]
	width: number
}

export interface PlayAddr2 {
	data_size: number
	file_cs: string
	file_hash: string
	height: number
	uri: string
	url_key: string
	url_list: string[]
	width: number
}

export interface PlayAddrBytevc1 {
	data_size: number
	file_cs: string
	file_hash: string
	height: number
	uri: string
	url_key: string
	url_list: string[]
	width: number
}

export interface PlayAddrH264 {
	data_size: number
	file_cs: string
	file_hash: string
	height: number
	uri: string
	url_key: string
	url_list: string[]
	width: number
}

export interface Video {
	ai_dynamic_cover: AiDynamicCover
	ai_dynamic_cover_bak: AiDynamicCoverBak
	animated_cover: AnimatedCover
	big_thumbs: any[]
	bit_rate: BitRate[]
	cdn_url_expired: number
	cover: Cover
	download_addr: DownloadAddr
	duration: number
	dynamic_cover: DynamicCover
	has_watermark: boolean
	height: number
	is_bytevc1: number
	is_callback: boolean
	meta: string
	misc_download_addrs: string
	need_set_token: boolean
	origin_cover: OriginCover
	play_addr: PlayAddr2
	play_addr_bytevc1: PlayAddrBytevc1
	play_addr_h264: PlayAddrH264
	ratio: string
	source_HDR_type: number
	tags?: any
	width: number
}

export interface VideoControl {
	allow_download: boolean
	allow_duet: boolean
	allow_dynamic_wallpaper: boolean
	allow_music: boolean
	allow_react: boolean
	allow_stitch: boolean
	draft_progress_bar: number
	prevent_download_type: number
	share_type: number
	show_progress_bar: number
	timer_status: number
}

export interface AwemeInfo {
	anchors?: any
	anchors_extras: string
	author: Author
	author_user_id: number
	aweme_acl: AwemeAcl
	aweme_id: string
	aweme_type: number
	bodydance_score: number
	branded_content_accounts?: any
	cc_template_info: CcTemplateInfo
	cha_list: ChaList[]
	challenge_position?: any
	cmt_swt: boolean
	collect_stat: number
	commerce_config_data?: any
	commerce_info: CommerceInfo
	content_desc: string
	content_desc_extra: any[]
	cover_labels?: any
	create_time: number
	desc: string
	desc_language: string
	disable_search_trending_bar: boolean
	distance: string
	distribute_type: number
	follow_up_item_id_groups: string
	follow_up_publish_from_id: number
	geofencing?: any
	geofencing_regions?: any
	green_screen_materials?: any
	group_id: string
	group_id_list: GroupIdList
	has_vs_entry: boolean
	have_dashboard: boolean
	hybrid_label?: any
	image_infos?: any
	interact_permission: InteractPermission
	interaction_stickers?: any
	is_ads: boolean
	is_description_translatable: boolean
	is_hash_tag: number
	is_pgcshow: boolean
	is_preview: number
	is_relieve: boolean
	is_text_sticker_translatable: boolean
	is_top: number
	is_vr: boolean
	item_comment_settings: number
	item_duet: number
	item_react: number
	item_stitch: number
	label_top: LabelTop
	label_top_text?: any
	long_video?: any
	mask_infos: any[]
	misc_info: string
	music: Music
	music_begin_time_in_ms: number
	music_selected_from: string
	music_title_style: number
	need_trim_step: boolean
	need_vs_entry: boolean
	nickname_position?: any
	no_selected_music: boolean
	origin_comment_ids?: any
	playlist_blocked: boolean
	poi_re_tag_signal: number
	position?: any
	prevent_download: boolean
	products_info?: any
	question_list?: any
	rate: number
	reference_tts_voice_ids?: any
	reference_voice_filter_ids?: any
	region: string
	risk_infos: RiskInfos
	search_desc: string
	search_highlight: SearchHighlight[]
	share_info: ShareInfo2
	share_url: string
	sort_label: string
	statistics: Statistics
	status: Status
	text_extra: TextExtra[]
	text_sticker_major_lang: string
	tts_voice_ids?: any
	uniqid_position?: any
	user_digged: number
	video: Video
	video_control: VideoControl
	video_labels: any[]
	video_text: any[]
	voice_filter_ids?: any
	with_promotional_music: boolean
	without_watermark: boolean
}

export interface PreloadImg {
	urls: string[]
}

export interface ITikTokPost {
	aweme_info: AwemeInfo
	doc_id: number
	doc_type: number
	feedback_type: string
	preload_img: PreloadImg
	provider_doc_id_str: string
	type: number
}
