// import express from "express";
const express=require("express")

// import {PostAppointment,getAppointment,updateAppoinment,aptSearch} from "../controllers/appointmentControler.js";
const {PostAppointment,getAppointment,updateAppoinment,aptSearch}=require("../controllers/appointmentControler.js")

// import verifyToken from "../utils/verify.js";
const verifyToken=require("../utils/verify.js")

const router=express.Router();




router.route("/").post(PostAppointment)
router.route("/get").get(getAppointment)
router.route("/update").put(updateAppoinment)
router.route("/search").post(aptSearch)

 

// export default router      

module.exports=router