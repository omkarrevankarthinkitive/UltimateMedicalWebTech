import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";



//ROUTE IMPORTS
import userRoutes from "./routes/userRoutes.js"
import patientRoutes from "./routes/patientRoutes.js"
import medicalHistory from "./routes/medicalHistoryRoutes.js"
import doctorDetail from "./routes/DoctorDetailsRoute.js"
import Appointments from "./routes/AppointmentRoute.js"


import cors from 'cors'

//THE DB CONNECTION
connectDB()



const app = express()
app.use(express.json());

app.use(cors())


//ROUTES

//USERS
app.use('/api/users', userRoutes)

//PATIENTS
app.use("/api/patient",patientRoutes)
app.use("/api/patient/medicalhistory",medicalHistory)

//DOCTORS
app.use("/api/doctor/doctordetail",doctorDetail)

//APPOINTMENTS
app.use("/api/appointment",Appointments)


const PORT = process.env.PORT || 4222




app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`.yellow.bold)
}
)
