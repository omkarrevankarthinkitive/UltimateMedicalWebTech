import express from "express";

import {PostAppointment,getAppointment,updateAppoinment} from "../controllers/AppointmentControler.js";
import verifyToken from "../utils/verify.js";
const router=express.Router();




router.route("/").post(PostAppointment)
router.route("/get").get(getAppointment)
router.route("/update").put(updateAppoinment)

 

export default router       