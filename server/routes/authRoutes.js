import express from 'express';
import  {signup,login, players , findUsers, deleteAdmin,logout} from '../controllers/authControllers.js';
import playerFind from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post('/signup',signup);
router.post('/login', login);
router.get("/players",players)
router.delete("/delete/:id",deleteAdmin)
router.get("/findUsers",playerFind, findUsers)
router.get("/logout",logout)

export default router;
