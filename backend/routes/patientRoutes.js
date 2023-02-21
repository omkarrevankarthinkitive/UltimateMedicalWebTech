const express = require("express");
//const { authUsered, authRole } = require("../authentication/basicAuth.js");
const  patientpost  = require("../controllers/patientController.js");
const verifyToken = require("../utils/verify.js");
const router=express.Router();




router.route("/patientDetail").post(verifyToken,patientpost)



module.exports=router