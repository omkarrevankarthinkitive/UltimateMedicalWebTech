import React, { useEffect, useState } from 'react'
import { Box ,} from '@mui/system'
import { Button,Typography} from '@mui/material'
import Select from "react-select";

import {useNavigate} from "react-router-dom"
import { func } from 'joi';




function DashBorad() {
   const navigate=useNavigate()

  const [dname,setDname]=useState("")
  const [dataAll,setDataAll]=useState([])
  const [selectedOptions, setSelectedOptions] = useState();

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

  function doctorDetail(){
    console.log("hello")
    navigate("/api/doctordetails/");
   
   
    
  }

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  console.log(selectedOptions,"selecteddddd")
  function handleInputChange(e){
   setDname(e)
  }

  return (
    <div>
     {/* <Select
  options={optionList}
  placeholder="Select color"
  value={selectedOptions}
/> */}



<Select
onInputChange={handleInputChange}
  options={dataAll || []}
  placeholder="Select color"
  value={dataAll}
  
  isSearchable={true}
  
/>

      <datalist onClick={doctorDetail}  id="mylist">
        { 
         dataAll && dataAll.map((item)=>{
          console.log(item,"itemsssss")
           return (<option  style={{fontSize:"5rem"}} value={item.doctorName} /> )
              
            
          })
        }
     <option value="value"/>
   
</datalist>
      <Box sx={{padding:"2rem "}}>
      <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",justifyContent:"space-between"}}>
            <Typography sx={{fontFamily:"Unbounded",fontSize:"1.5rem",color:"#08090B"}} >DOOK ®</Typography>
            <Button  variant='outlined'sx={{border:"2px solid black",borderRadius:"30px",fontWeight:"bold",float: "right",fontSize:"1.5rem",color:"#08090B"}} onClick={handleLogOut} >LogOut</Button>
          </Box>
      </Box>
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:"100%"}}>
        <Typography sx={{fontSize:"3rem",fontWeight:"Bold",marginTop:"50px",color:"#454949"}}>Get An Appointment At Your Nearest Doc</Typography>
       {/* <input value={dname} placeholder='Search Doctor Name' onChange={handleDoctorChange} type="search" list="mylist" style={{height:"5rem",width:"40rem",marginTop:"3rem",fontSize:"2.5rem",padding:"1rem",borderRadius:"2rem"}} /> */}
      </Box>
      
        
    </div>
  ) 
}

export default DashBorad