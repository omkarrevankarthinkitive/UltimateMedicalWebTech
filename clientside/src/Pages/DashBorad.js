import React from 'react'
import { Box ,} from '@mui/system'
import { Button,Typography} from '@mui/material'
import {Link,useNavigate} from "react-router-dom"

function DashBorad() {
  const navigate=useNavigate()
  function handleLogOut() {
    localStorage.clear();

    navigate("/api/login");
  }
  return (
    <div>
      <Box sx={{padding:"2rem "}}>
      <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",justifyContent:"space-between"}}>
            <Typography sx={{fontFamily:"Unbounded",fontSize:"1.5rem",color:"#08090B"}} >DOOK ®</Typography>
            <Button  variant='outlined'sx={{border:"2px solid black",borderRadius:"30px",fontWeight:"bold",float: "right",fontSize:"1.5rem",color:"#08090B"}} onClick={handleLogOut} >LogOut</Button>
          </Box>
      </Box>
        
    </div>
  )
}

export default DashBorad