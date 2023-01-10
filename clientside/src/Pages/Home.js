import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

// importing the image

import homeImage from "../assets/homeImage.jpg"

import {Link} from "react-router-dom"

function Home() {
  return (
    <div style={{padding:"100px 75px",backgroundColor:"#D3D3D3",height:"100vh",marginTop:"0px"}}>


        <Box sx={{display:"flex",backgroundColor:"#F3F3F3",borderRadius:"25px"}} >
         

        <Box sx={{padding:"30px",alignItems:"center", flex: "50%" }}>
        
          <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",justifyContent:"space-between"}}>
            <Typography sx={{fontFamily:"Unbounded",fontSize:"2.5rem",color:"#08090B"}} >DOOK ®</Typography>
            <Button  variant='outlined'sx={{border:"2px solid black",borderRadius:"30px",fontWeight:"bold",float: "right",fontSize:"2.5rem",color:"#08090B"}} ><Link to="/api/login" style={{color:"#08090B",textDecoration:"none"}}>Login</Link></Button>
          </Box>

          <Typography sx={{border:"2px solid grey",padding:"8px",display:"inline-block",borderRadius:"50px",marginTop:"50px",color:"#454949",fontWeight:"bold"}} >
            APP THAT SAVES UP A LOTS OF TIME
          </Typography>

          <Typography sx={{fontSize:"4rem",fontWeight:"Bold",marginTop:"50px",color:"#454949"}}>THE EASIEST WAY TO B<span style={{color:"#393D3C"}}>OOK</span> YOUR <span style={{color:"#393D3C"}} >D</span>OCTOR.</Typography>


          <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",justifyContent:"space-between",marginTop:"140px"}}>
            <Typography variant='p' sx={{fontSize:"16px",fontWeight:"bold",color:"grey"}}>No more waiting in the line to get that appointment</Typography>
            <Typography sx={{color:"white",borderRadius:"5px",fontWeight:"bold",float: "right",backgroundColor:"#08090B",padding:"7px"}}>FREE</Typography>
          </Box>

        </Box>


          

        <Box sx={{ flex: "50%",justifyContent:"center",alignItems:"center",display:"flex"}}>
          <img src={homeImage} alt="This is an home Image" style={{height:"660px"}} />
        </Box>




        </Box>


    </div>
  )
}

export default Home