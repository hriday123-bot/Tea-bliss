import express from 'express';
import {getData,getDataId} from '../controllers/dataConroller.js'

const router = express.Router();

router.route('/').get(getData);
router.route('/:id').get(getDataId);

export default router;