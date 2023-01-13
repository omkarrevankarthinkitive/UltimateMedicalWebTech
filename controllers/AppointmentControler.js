import { Appointment } from "../models/AppointmentModel.js";

//post an appointment week
const PostAppointment=async(req,res)=>{
    try { 

        const newAppointment=new Appointment({
           fields:req.body.fields

        })

        await  newAppointment.save()
        res.send(newAppointment)

        
    } catch (error) {
        res.status(400).send("error",error.message)
    }
}


//get the appointment list

const getAppointment=async(req,res)=>{
    try {
         const id="63beb9c781b7d927f3e155d5"
     const getAppoint= await Appointment.findById(id)

     console.log(getAppoint,"allAppointmentInOnePlace")

     res.send(getAppoint)

    } catch (error) {
        res.send(error.message)
    }
    
}

//update appointment list
const updateAppoinment=async(req,res)=>{
try {
    const id="63beb9c781b7d927f3e155d5" 
     const getAppoint= await Appointment.findById(id)

     getAppoint.fields= req.body.fields
    const updateSave=await getAppoint.save()
     console.log(updateSave)
     res.send(updateSave)
     
    // getAppoint.fields[0][0].id=req.body.id
    // getAppoint.fields[0][0].number=req.body.number
    // getAppoint.fields[0][0].isSelected=req.body.isSelected
    // getAppoint.fields[0][0].periods=req.body.periods
    // if(getAppoint.fields[0][0]){
    //     req.body.isReserved
    // }
    

   
    // getAppoint.fields[1]
   
    // getAppoint.fields[2]
   
    // getAppoint.fields[3]
   
    // getAppoint.fields[4]



    
} catch (error) {
    res.send(error.message)
}
}

export { PostAppointment ,getAppointment,updateAppoinment}