import {Router} from 'express';
import validateJOI from '../middlewares/validateJOI.js';
import {signinSchema, userSchema} from '../joi/schemas.js';
import {signin, signup, me, signOut} from '../controllers/auth.js';
import verifyToken from '../middlewares/verifyToken.js';

const authRouter = Router();

authRouter.get('/me', verifyToken, me);
authRouter.post('/signin', validateJOI(signinSchema), signin);
authRouter.post('/signup', validateJOI(userSchema), signup);
authRouter.delete('/signout', signOut);

export default authRouter;
