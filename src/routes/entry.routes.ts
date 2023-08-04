import { Router } from 'express';
import { entry } from '../controllers/entry.controller'

const router = Router();

router.route('/').get(entry);

export default router;