import express from "express";
import  {authUsered,adminRole,DoctorRole}  from "../authentication/basicAuth.js";
import { doctorDetailPost,doctorSearch } from "../controllers/doctorDetailcontroller.js";
import verifyToken from "../utils/verify.js";
const router=express.Router();




router.route("/").post(verifyToken,DoctorRole(),doctorDetailPost)
router.route("/getdoctorsname").post(doctorSearch)



export default router