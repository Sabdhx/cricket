import express from 'express';
import { blogsByAdmin,deletePostsByAdmin,deleteBlogsByAdmin } from '../controllers/adminController.js';
import protect from '../middlewares/authMiddleware.js';

const router = express.Router();

// router.use(protect);
// router.use(roleMiddleware('admin'));

router.post("/blogs",blogsByAdmin);
router.delete("/deletePost/:id", deletePostsByAdmin)
router.delete("/deleteblogs" , deleteBlogsByAdmin)
export default router;