import express from "express";
//import  {authUsered,authRole}  from "../authentication/basicAuth.js";
import { patientpost } from "../controllers/patientController.js";
import verifyToken from "../utils/verify.js";
const router=express.Router();




router.route("/patientDetail").post(verifyToken,patientpost)



export default router    