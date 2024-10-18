import express from 'express';
import HiringManagerVerifier from '../middlewares/hiringManagerVerfier.js';
import { hiringPlayer, hiringPlayerFind } from '../controllers/hiringManagerController.js';

const router = express.Router();


router.get('/hiring',HiringManagerVerifier,hiringPlayer );
router.get("/hiringPlayer/:id",HiringManagerVerifier,hiringPlayerFind)


export default router;
