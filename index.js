import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";



//ROUTE IMPORTS
import userRoutes from "./routes/userRoutes.js"
import patientRoutes from "./routes/patientRoutes.js"
import medicalHistory from "./routes/medicalHistoryRoutes.js"
import doctorDetail from "./routes/DoctorDetailsRoute.js"

//THE DB CONNECTION
connectDB()



const app = express()
app.use(express.json());




//ROUTES

//USERS
app.use('/api/users', userRoutes)

//PATIENTS
app.use("/api/patient",patientRoutes)
app.use("/api/patient/medicalhistory",medicalHistory)

//DOCTORS
app.use("/api/doctor/doctordetail",doctorDetail)


const PORT = process.env.PORT || 3000




app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`.yellow.bold)
}
)