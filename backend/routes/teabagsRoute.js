import express from 'express';
import { teabag,teabagById } from '../controllers/teabagController.js';

const router = express.Router();

router.route('/').get(teabag);
router.route('/:id').get(teabagById);


export default router;
