import React, { useEffect, useState } from 'react'
import "../CSS/DocDetails.css"

import {useNavigate, useLocation} from "react-router-dom"
import { Typography,Box,Button } from '@mui/material'



function DocDetails() {
    const navigate=useNavigate()
    const [allData,setDataAll]=useState([])
    const location=useLocation()
  const newLocation=  location.pathname.slice(20)

    let justData={
        "_id":newLocation
    }
    useEffect(()=>{
        getdocByID(justData)
    },[])

let statusCode

let token=localStorage.getItem("token")
    const getdocByID = async (data) => {
        await fetch(`http://localhost:4222/api/doctor/doctordetail/doctorsPage/${newLocation}`, {
          method: "POST",
          
          headers: {
            "Content-Type": "application/json",
            "Authorization": token
          },
        })
          .then((res) => {
            statusCode=res.status
            return res.json()})
          
          .then((res) => {
        
            if (statusCode === 400) {
             console.log(res+"wwwwwwwwww")
            }
            if (statusCode === 200) {
              console.log("data: ", res);
              setDataAll(res)
    
              
              
              
            }
          });
      };

      function bookAptRoute(){
        navigate("/api/bookapt")
      }




console.log("theAllData",allData)
  return (
    <div>
        <Box sx={{width:"15%",height:"100vh",backgroundColor:"#F7F5EB"}}>
            <Box>
                {/* <img src="https://media.istockphoto.com/id/1225681170/vector/abstract-wavy-halftone-dots-background.jpg?s=612x612&w=0&k=20&c=zANmghgAlFAcGS8nfmTj7JRKgmlyF_JmZlwCQjMc2pA="/> */}
            </Box>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"50px",flexDirection:"column" }}>
          <img src={allData.img} style={{height:"120px",width:"120px",borderRadius:"50%" }}/>
      <Typography sx={{color:"black",marginTop:"20px",fontSize:"1.2rem"}}>{allData.doctorName}</Typography>
      <Box  sx={{display:"flex",justifyContent:"space-between"}}>      <Typography >Qualification</Typography>
      <Typography>{allData.qualification}</Typography></Box>
   <Box sx={{display:"flex",gap:"20px"}}>
   <Typography>Clinic Name</Typography>
   <Typography>{allData.clinicName}</Typography>
   </Box>
     
      <Typography></Typography>
        <Typography sx={{marginTop:"70px",marginBottom:"8px"}}>ABOUT ME</Typography>
        <Typography sx={{width:"200px",textAlign:"center"}}>{allData.aboutMyself}</Typography>
      <Box sx={{display:"flex"}}>
      <Typography>Gender</Typography>
      <Typography>{allData.Gender}</Typography>
      </Box>
      <Button sx={{backgroundColor:"black",color:"white"}}>BOOK MY APPOINTMENt</Button>


          </Box>

        </Box>
        {/* <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">{allData.doctorName}</h3>

                            {
                               allData && allData.qualification && allData.qualification.map((item)=>{
                                return (
                                    <h6 className="theme-color lead">{item}</h6>
                                )
                                })
                            }
                            
                            <p>{allData.aboutMyself}</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                <div className="media">
                                        <label>Clinic</label>
                                        <p>{allData.clinicName}</p>
                                    </div>
                                    <div className="media">
                                        <label>Gender</label>
                                        <p>{allData.Gender}</p>
                                    </div>
                                    
                                    <div className="media">
                                        <label>Address</label>
                                        <p>California, USA</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div className="media">
                                        <label>phone</label>
                                        <p>{allData.phoneNumber}</p>
                                    </div>
                                    <div className="media">
                                        <label>Skype</label>
                                        <p>skype.0404</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                                <p className="m-0px font-w-600">operations Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                                <p className="m-0px font-w-600">Telephonic Treatment</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Home Treatment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:'2rem'}}>
            <Button variant='contained' sx={{backgroundColor:"#454949"}} onClick={bookAptRoute}>
      Book My Appointment
            </Button>
        </Box> */}
    </div>
  )
}

export default DocDetails