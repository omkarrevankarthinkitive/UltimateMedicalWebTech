import express from "express";
//import  {authUsered,authRole}  from "../authentication/basicAuth.js";
import { patientpost } from "../controllers/patientController.js";
const router=express.Router();




router.route("/patientDetail").post(patientpost)



export default router    