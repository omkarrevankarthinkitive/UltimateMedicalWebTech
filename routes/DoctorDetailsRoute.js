import express from "express";
import  {authUsered,adminRole,DoctorRole}  from "../authentication/basicAuth.js";
import { doctorDetailPost,doctorSearch,docsearchAll } from "../controllers/doctorDetailcontroller.js";
import verifyToken from "../utils/verify.js";
const router=express.Router();




router.route("/").post(doctorDetailPost)
router.route("/getdoctorsname").post(verifyToken,doctorSearch)
router.route("/doctorsPage/:id").post(verifyToken,docsearchAll)



export default router 