import { Appointment } from "../models/AppointmentModel.js";

//post an appointment week
const PostAppointment=async(req,res)=>{
    try { 

        const newAppointment=new Appointment({
            reason:req.body.reason,
            location:req.body.location,
            room:req.body.room,
            diagnosis:req.body.diagnosis,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            dob:req.body.dob,
            gender:req.body.gender,
            cellPhone:req.body.cellPhone,
            homePhone:req.body.homePhone,
            email:req.body.email,
            address:req.body.address,
            Province:req.body.Province,
            city:req.body.city,
            postalCode:req.body.postalCode,
            aptTime:req.body.aptTime,
            aptDate:req.body.aptDate

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
        
     const getAppoint= await Appointment.find()

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