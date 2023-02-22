import { Router } from 'express';
import jetValidator from 'jet-validator';

import adminMw from './middleware/adminMw';
import Paths from './constants/Paths';
import User from '@src/models/User';
import UserRoutes from './UserRoutes';
import { Config } from '@src/posting-base/types/types';
import { postingBase } from '@src/posting-base/postingBase';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// **** Setup **** //

const youtubeShorts = Router();

youtubeShorts.post('/youtube-shorts', (req: any, res: any) => {
	const shortsConfig: Config = req.body
	postingBase(shortsConfig)
	res.status(200).send('Job has been started')
})

// ** Add UserRouter ** //

const userRouter = Router();

// Get all users
userRouter.get(
  Paths.Users.Get,
  UserRoutes.getAll,
);

// Add one user
userRouter.post(
  Paths.Users.Add,
  validate(['user', User.isUser]),
  UserRoutes.add,
);

// Update one user
userRouter.put(
  Paths.Users.Update,
  validate(['user', User.isUser]),
  UserRoutes.update,
);

// Delete one user
userRouter.delete(
  Paths.Users.Delete,
  validate(['id', 'number', 'params']),
  UserRoutes.delete,
);



// Add UserRouter
apiRouter.use(Paths.Users.Base, adminMw, userRouter);


// **** Export default **** //

export default apiRouter;
