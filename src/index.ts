import './pre-start'; // Must be the first import
import logger from 'jet-logger';
import server from './server';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// **** Run **** //

const SERVER_START_MSG = ('Express server started on port: ' + 
  process.env.PORT);

server.listen(process.env.PORT, () => logger.info(SERVER_START_MSG));
