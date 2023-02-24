import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from './constants/Paths';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();


// **** Setup **** //


// Add UserRouter
// apiRouter.use(Paths.Users.Base, adminMw, userRouter);


// **** Export default **** //

export default apiRouter;
