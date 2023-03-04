/**
 * Setup express server.
 */

import morgan from 'morgan'
import path from 'path'
import helmet from 'helmet'
import express from 'express'
import logger from 'jet-logger'
import bodyParser from 'body-parser'

import 'express-async-errors'

import BaseRouter from '@src/routes/api'
import Paths from '@src/routes/constants/Paths'

import HttpStatusCodes from '@src/constants/HttpStatusCodes'

import { NodeEnvs } from '@src/constants/misc'
import { RouteError } from '@src/other/classes'
import mongoose, { ConnectOptions } from 'mongoose'
import { IConfig, IRequest } from './posting-base/types/types'
import { postingBase } from './posting-base/postingBase'
import { clearDownloadFolder } from './posting-base/utils/utils'
// **** Variables **** //

const app = express()

mongoose.set('strictQuery', true)

mongoose.connect(
	`mongodb+srv://${
		process.env.MONGODB_AUTH as string
	}@cluster0.lyyb5.mongodb.net/youtube-shorts?retryWrites=true&w=majority`,
	{ useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
	function (err) {
		if (err) return console.log(err)
	},
)

// **** Setup **** //

app.use(express.json({ limit: '50mb', extended: true }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// Show routes called in console during development
if (process.env.NODE_ENV === NodeEnvs.Dev) {
	app.use(morgan('dev'))
}

// Security
if (process.env.NODE_ENV === NodeEnvs.Production) {
	app.use(helmet())
}

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter)

// Add error handler
app.use(
	(
		err: Error,
		_: any,
		res: any,
		next: any,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
	): string => {
		if (process.env.NODE_ENV !== NodeEnvs.Test) {
			logger.err(err, true)
		}
		let status = HttpStatusCodes.BAD_REQUEST
		if (err instanceof RouteError) {
			status = err.status
		}
		return res.status(status).json({ error: err.message }) as string
	},
)

// ** Front-End Content ** //

// Set views directory (html)
const viewsDir = path.join(__dirname, 'views')
app.set('views', viewsDir)

// Set static directory (js and css).
const staticDir = path.join(__dirname, 'public')
app.use(express.static(staticDir))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

// Nav to login pg by default
app.get('/', (req: any, res: any) => {
	res.sendFile('login.html', { root: viewsDir })
})

app.post('/youtube-shorts', (req: IRequest, res: any) => {
	const shortsConfig: IConfig = req.body
	postingBase(shortsConfig)
	res.send('Job has been started')
})

//Clear all downloaded files
//clearDownloadFolder()

// **** Export default **** //

export default app
