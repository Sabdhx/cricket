import express from 'express';
import { getHiredPlayers } from '../controllers/hiringController.js';
import protect from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(roleMiddleware('hiringManager'));

router.get('/hired', getHiredPlayers);

export default router;
