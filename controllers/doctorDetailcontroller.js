

import { Doctor,validateDoctor } from "../models/doctorDetailModel.js";




import { User } from "../models/userModel.js";


//post user

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
   export {
   
    doctorDetailPost
  }
