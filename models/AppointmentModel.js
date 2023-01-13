
import mongoose from "mongoose";


const appointmentSchema=new mongoose.Schema(
    {
    
        fields:{
            type:Array,
            
        }
        

       
        
        
        
        
       
    }
)

const Appointment=mongoose.model("Appiontment",appointmentSchema)


export {Appointment,appointmentSchema}