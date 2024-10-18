import express from 'express';
import { blogsByAdmin,deletePostsByAdmin,deleteBlogsByAdmin, allBlogs, allAdmins } from '../controllers/adminController.js';
import AdminVerifier from '../middlewares/AdminVerifier.js';

const router = express.Router();

// router.use(protect);
// router.use(roleMiddleware('admin'));

router.post("/blogs",AdminVerifier,blogsByAdmin);
router.delete("/deletePost/:id",AdminVerifier, deletePostsByAdmin)
router.delete("/deleteblogs" ,AdminVerifier, deleteBlogsByAdmin)
router.get("/allBlogs", allBlogs)
router.get("/allAdmin", allAdmins)
export default router;