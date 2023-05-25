import {Router} from 'express'
import { ping } from '../index.controllers.js';

const router = Router()

router.get('/ping', ping);

export default router