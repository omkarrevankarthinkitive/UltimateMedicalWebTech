import express from "express";
import { adminRole,authUsered,DoctorRole} from "../authentication/basicAuth.js";
import { registerUser,authUser,requestPasswordReset } from "../controllers/userController.js";
const router=express.Router();




router.route("/").post(registerUser)
router.post('/login', authUser)
router.post("/newpass",requestPasswordReset)


export default router    