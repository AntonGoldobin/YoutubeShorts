// YouTube API video uploader using JavaScript/Node.js
// You can find the full visual guide at: https://www.youtube.com/watch?v=gncPwSEzq1s
// You can find the brief written guide at: https://quanticdev.com/articles/automating-my-youtube-uploads-using-nodejs
//
// Upload code is adapted from: https://developers.google.com/youtube/v3/quickstart/nodejs

import { Config } from '../../types/types'

const fs = require('fs')
const readline = require('readline')
import { google } from 'googleapis'
const OAuth2 = google.auth.OAuth2

// If modifying these scopes, delete your previously saved credentials in client_oauth_token.json
const SCOPES = [
	'https://www.googleapis.com/auth/cloud-platform',
	'https://www.googleapis.com/auth/youtube.upload',
	'https://www.googleapis.com/auth/youtube',
]

export const loginToYoutube = (config: Config) => {
	// Authorize a client with the loaded credentials, then call the YouTube API.
	return authorize(config.youtubeSecret, config)
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */

const authorize = async (keys: any, config: Config) => {
	const clientSecret = keys.web.client_secret
	const clientId = keys.web.client_id
	const redirectUrl = keys.web.redirect_uris[0]
	const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl)

	return new Promise((res, rej) => {
		// Check if we have previously stored a token.
		if (!config.youtubeLoginToken) {
			console.log('should create a new token')
			res(getNewToken(oauth2Client, config))
		} else {
			oauth2Client.credentials = config.youtubeLoginToken
			console.log('Successfully logged in to the youtube account')
			res(oauth2Client)
		}
	})
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */

const getNewToken = (oauth2Client: any, config: Config) => {
	return new Promise((res, rej) => {
		const authUrl = oauth2Client.generateAuthUrl({
			access_type: 'offline',
			scope: SCOPES,
		})
		console.log('Authorize this app by visiting this url: ', authUrl)
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		})
		rl.question('Enter the code from that page here: ', (code: any) => {
			rl.close()
			oauth2Client.getToken(code, function (err: unknown, token: string) {
				if (err) {
					console.log('Error while trying to retrieve access token', err)
					return
				}
				oauth2Client.credentials = token
				storeToken(token, config)
				res(oauth2Client)
			})
		})
	})
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
const storeToken = (token: string, config: Config) => {
	console.log('storing the youtube token')
	console.log('Your youtube token is:', token)

	//If needs to save json token

	// fs.writeFile(config.tokenPath, JSON.stringify(token), (err: unknown) => {
	// 	if (err) throw err
	// 	console.log('Token stored to ' + config.tokenPath)
	// })
}
