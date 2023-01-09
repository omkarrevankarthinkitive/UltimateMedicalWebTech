import React, { useEffect, useState } from 'react'
import { Box ,} from '@mui/system'
import { Button,Typography} from '@mui/material'

import {useNavigate} from "react-router-dom"




function DashBorad() {

  const [dname,setDname]=useState("")

   function handleDoctorChange(e){
    setDname(e.target.value)
   }

   

   useEffect(()=>{
  const named=  {
      "searchField":dname
  }
    searchDoctors(named)
   },[dname])
let statusCode
let allData
  const searchDoctors = async (data) => {
    await fetch("http://localhost:4222/api/doctor/doctordetail/getdoctorsname", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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

          
          
        }
      });
  };


  //console.log(allData,"alllllllllllllllDAatatata")



  
  


  const navigate=useNavigate()
  function handleLogOut() {
    localStorage.clear();

    navigate("/api/login");
  }


  return (
    <div>
      <datalist id="mylist">
   <option value="Option 1"/>
   <option value="Option 2"/>
   <option value="Option 3"/>
</datalist>
      <Box sx={{padding:"2rem "}}>
      <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",justifyContent:"space-between"}}>
            <Typography sx={{fontFamily:"Unbounded",fontSize:"1.5rem",color:"#08090B"}} >DOOK ®</Typography>
            <Button  variant='outlined'sx={{border:"2px solid black",borderRadius:"30px",fontWeight:"bold",float: "right",fontSize:"1.5rem",color:"#08090B"}} onClick={handleLogOut} >LogOut</Button>
          </Box>
      </Box>
      <Box>
        <Typography>Get appointment at your nearest Doc</Typography>
        
      </Box>
      <input onChange={handleDoctorChange} type="search" list="mylist"/>
        
    </div>
  )
}

export default DashBorad