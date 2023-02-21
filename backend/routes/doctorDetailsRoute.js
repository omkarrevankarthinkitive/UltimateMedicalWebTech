// import express from "express";
const express=require("express")
// import  {authUsered,adminRole,DoctorRole}  from "../authentication/basicAuth.js";
const {authUsered,adminRole,DoctorRole}=require("../authentication/basicAuth.js")

// import { doctorDetailPost,doctorSearch,docsearchAll } from "../controllers/doctorDetailcontroller.js";

const {doctorDetailPost,doctorSearch,docsearchAll}=require("../controllers/doctorDetailcontroller.js")
// import verifyToken from "../utils/verify.js";
const verifyToken=require("../utils/verify.js")

const router=express.Router();




router.route("/").post(doctorDetailPost)
router.route("/getdoctorsname").post(verifyToken,doctorSearch)
router.route("/doctorsPage/:id").post(verifyToken,docsearchAll)



// export default router 

module.exports=router