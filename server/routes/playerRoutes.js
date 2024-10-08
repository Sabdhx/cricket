import express from 'express';
import { getPlayerDashboard,deletePostsByPlayer, postUploadByPlayer,allPlayerPosts } from '../controllers/playerController.js';
import protect from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';
import posting from '../models/posts.js';
const router = express.Router();

// router.use(protect);
// router.use(roleMiddleware('player'));

router.get('/dashboard', getPlayerDashboard);
router.post('/post', postUploadByPlayer);
router.get('/allPosts', allPlayerPosts);
router.delete("/deletePosts",deletePostsByPlayer)
export default router;
