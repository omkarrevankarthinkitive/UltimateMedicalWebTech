// import express from "express";
// import  {authUsered,adminRole}  from "../authentication/basicAuth.js";
// import { Medicalhistorypost } from "../controllers/medicalHistoryController.js";

const express = require("express");
const { authUsered, adminRole } = require("../authentication/basicAuth.js");
const Medicalhistorypost = require("../controllers/medicalHistoryController.js");


const router=express.Router();




router.route("/").post(Medicalhistorypost)



// export default router

module.exports=router