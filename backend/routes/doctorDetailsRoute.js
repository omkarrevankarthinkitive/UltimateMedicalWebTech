const express = require("express");
const {
  authUsered,
  adminRole,
  DoctorRole,
} = require("../authentication/basicAuth.js");

const {
  doctorDetailPost,
  doctorSearch,
  docsearchAll,
} = require("../controllers/doctorDetailcontroller.js");
const verifyToken = require("../utils/verify.js");

const router = express.Router();

router.route("/").post(doctorDetailPost);
router.route("/getdoctorsname").post(verifyToken, doctorSearch);
router.route("/doctorsPage/:id").post(verifyToken, docsearchAll);

module.exports = router;
