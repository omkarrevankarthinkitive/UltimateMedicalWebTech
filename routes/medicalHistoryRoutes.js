import express from "express";
import  {authUsered,adminRole}  from "../authentication/basicAuth.js";
import { Medicalhistorypost } from "../controllers/medicalHistory.js";
const router=express.Router();




router.route("/").post(Medicalhistorypost)



export default router