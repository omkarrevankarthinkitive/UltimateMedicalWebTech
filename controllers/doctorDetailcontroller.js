

import { Doctor,validateDoctor } from "../models/doctorDetailModel.js";




import { User } from "../models/userModel.js";


//post Doctor

const doctorDetailPost=async(req,res)=>{
//   const {error}=validateUser(req.body)
//   if(error){
//     res.send(error.message)
//   }
  
  const thisEmail=req.body.email
 

  const user = await User.findOne({thisEmail});
if (!user){
  res.status(400).send("User does not exist");
}
    const newDoctor=  new Doctor({
        doctorName:req.body.doctorName,
        email:user,
        qualification:req.body.qualification,
        Gender:req.body.Gender,
        clinicName:req.body.clinicName,
        phoneNumber:req.body.phoneNumber,
        streetAddress:req.body.streetAddress,
        city:req.body.city,
        state:req.body.state,
        pinCode:req.body.pinCode,
        aboutMyself:req.body.aboutMyself,
        

        
       })

  await newDoctor.save()
  res.json(newDoctor)
  return;

}

//doctor search by id
const docsearchAll=async(req,res)=>{
  try {
    const theid=req.params.id
    const doctorID= await Doctor.findById(theid)
    res.send(doctorID)
  

  } catch (error) {
    res.send([])
  }
}




//search doctor

const doctorSearch=async(req,res)=>{
  try {
    
    const bodyIn=req.body.searchField
    
    console.log(bodyIn,"bodyin")
    
    const getDoctorsName=await Doctor.find({"doctorName" : {$regex : `${bodyIn}`}},{doctorName:1, _id:1}).limit(5)
    
   
    
    if(getDoctorsName){
      res.status(200).send(getDoctorsName)
    }
     
    
  } catch (error) {
    res.send([])

  }



}





   export {
   
    doctorDetailPost,
    doctorSearch,
    docsearchAll
  }
