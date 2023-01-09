import express from "express";
import { adminRole,authUsered,DoctorRole} from "../authentication/basicAuth.js";
import { registerUser,authUser,requestPasswordReset } from "../controllers/userController.js";
import verifyToken from "../utils/verify.js";
const router=express.Router();




router.route("/").post(registerUser)
router.post('/login', authUser)
router.post("/newpass",verifyToken,requestPasswordReset)
router.post("/verify",verifyToken)
 

export default router       