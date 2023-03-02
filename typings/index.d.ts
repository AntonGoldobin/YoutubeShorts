// // **** Declaration Merging ****
// declare module 'express' {
// 	export * from '@types/express'
// 	export * from 'express'
// 	export interface Request {
// 		signedCookies: Record<string, string>
// 	}
// 	export interface Response {}
// }

declare module 'express'
declare module 'morgan'
declare module 'http-errors'
declare module 'cookie-parser'
declare module 'node-schedule'
declare module 'selenium-webdriver'
declare module 'selenium-webdriver/chrome'
declare module 'jsonwebtoken'
declare module 'lodash'
declare module 'fluent-ffmpeg'
declare module 'express-serve-static-core'
declare module 'body-parser'
