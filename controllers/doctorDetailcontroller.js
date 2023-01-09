

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



//search doctor

const doctorSearch=async(req,res)=>{

if(!req.body.searchField){
  res.send("type doctors name")
}
const bodyIn=req.body.searchField

console.log(bodyIn,"bodyin")

const getDoctorsName=await Doctor.find({"doctorName" : {$regex : `${bodyIn}`}},{doctorName:1, _id:0}).limit(5)


if(getDoctorsName){
  res.status(200).send(getDoctorsName)
}else{
  res.status(400).send("oops its looks like we dont have nearby doctor on our database get them to use us")
}
 

}





   export {
   
    doctorDetailPost,
    doctorSearch
  }
