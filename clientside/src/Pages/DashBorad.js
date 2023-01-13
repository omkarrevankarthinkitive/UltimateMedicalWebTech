import React, { useEffect, useState } from 'react'
import { Box ,} from '@mui/system'
import { Avatar, Button,Select,Typography} from '@mui/material'

import {useNavigate,Link} from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';




function DashBorad() {
   const navigate=useNavigate()

  const [dname,setDname]=useState("")
  const [dataAll,setDataAll]=useState([])

   function handleDoctorChange(e){
    setDname(e.target.value)
   }

   

   useEffect(()=>{
  const named=  {
      "searchField":dname
  }
    searchDoctors(named)
   },[dname ])
let statusCode


const token=localStorage.getItem("token")
  const searchDoctors = async (data) => {
    await fetch("http://localhost:4222/api/doctor/doctordetail/getdoctorsname", {
      method: "POST",
      body: JSON.stringify(data),
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


  //console.log(allData,"alllllllllllllllDAatatata")



  
  


  
  function handleLogOut() {
    localStorage.clear();
   navigate("/")
   
  }

  function doctorDetail(e){
    const id=e
    
    navigate(`/api/doctordetails/:${id}`)

  
   
   
    
  }


  return (
    <div style={{backgroundColor:"#F3F3F3",height:"100vh",padding:"0px 150px"}}>

      
      <Box sx={{padding:"2rem" }}>
      <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",justifyContent:"space-between"}}>
            <Typography sx={{fontFamily:"Unbounded",fontSize:"1.5rem",color:"#08090B"}} ><Link to="/" style={{textDecoration:"none",color:"#08090B"}}>DOOK ®</Link></Typography>
            <Button  variant='outlined'sx={{border:"2px solid black",borderRadius:"30px",fontWeight:"bold",float: "right",fontSize:"1.5rem",color:"#08090B"}} onClick={handleLogOut} >LogOut</Button>
          </Box>
      </Box>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"white",borderRadius:"50px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <Typography sx={{fontSize:"2.5rem",fontWeight:"Bold",marginTop:"50px",color:"#454949"}}>GET AN APPOINTEMNT TO YOUR NEAREST DOCTOR.</Typography>
        <Box  >
        <SearchIcon sx={{fontSize:50,color:"#454949",opacity:"60%"}}/>
        <input placeholder='Search Doctor Name' onChange={handleDoctorChange} type="search"  style={{height:"4rem",width:"40rem",marginTop:"3rem",fontSize:"2rem",padding:"1rem",border:"none",outline:"none",}} />
        <hr/>
        </Box>
        <div  style={{width:"40rem",display:"flex",flexDirection:"column",paddingLeft:"25px"}} >
        { 
        // border:"2px solid #EAE0DA"
        dname &&( dataAll && dataAll.map((item)=>{
          console.log(item.img,"itemsssss")
           return (<Button  sx={{fontSize:"1.3rem",color:"#454949",paddingBottom:"5px",animationDelay:"2sec",margin:"10px",borderRadius:"10px",justifyContent:"space-between",padding:"20px 20px 20px 1rem",'&:hover': {backgroundColor: "#F3F3F3",boxShadow:"none"},animationDelay:"250ms",fontWeight:"bold",boxShadow: "rgba(149, 157, 165, 0.2) 0px 5px 10px"}} onClick={()=>doctorDetail(item._id)} endIcon={<ArrowForwardIosIcon/>} > <span style={{display:"flex"}}><Avatar sx={{marginRight:"20px"}} src={item.img}/> {item.doctorName}</span>  </Button> )
              

          }))
        }
     <option value="value"/>
   
</div>
      </Box>
      
        
    </div>
  ) 
}

export default DashBorad