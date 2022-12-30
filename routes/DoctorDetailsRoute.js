import express from "express";
import  {authUsered,adminRole,DoctorRole}  from "../authentication/basicAuth.js";
import { doctorDetailPost } from "../controllers/doctorDetailcontroller.js";
const router=express.Router();




router.route("/").post(DoctorRole(),doctorDetailPost)



export default router