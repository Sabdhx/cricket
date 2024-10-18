import express from 'express';
import { getPlayerDashboard,deletePostsByPlayer, postUploadByPlayer,allPlayerPosts, allPlayers, singlePost } from '../controllers/playerController.js';
import protect from '../middlewares/authMiddleware.js';
import posting from '../models/posts.js';
import playerFind from '../middlewares/authMiddleware.js';
import HiringManagerVerifier from '../middlewares/hiringManagerVerfier.js';
const router = express.Router();



router.get('/dashboard',playerFind, getPlayerDashboard);
router.post('/post',playerFind, postUploadByPlayer);
router.get("/singlePost/:id",singlePost)
router.get('/allPosts', allPlayerPosts);
router.delete("/deletePosts",playerFind,deletePostsByPlayer)
router.get("/players",playerFind,allPlayers)

export default router;
