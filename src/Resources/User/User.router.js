import { Router } from 'express';
import { currentUserDetails, updateUser } from './User.controller';

const router = Router();

Router().get('/', currentUserDetails);
Router().put('/', updateUser);

export default router;
