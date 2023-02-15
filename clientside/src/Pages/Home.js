import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

// importing the image

import homeImage from "../assets/1.png"

import {Link} from "react-router-dom"

function Home() {
  return (
    <div style={{padding:"100px 75px",backgroundImage:`url("https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>


        <Box sx={{display:"flex",background: "blur(10px)",backdropFilter: "saturate(130%) blur(10px)",boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",borderRadius:"25px"}} >  
         

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
            <Typography variant='p' sx={{fontSize:"16px",fontWeight:"bold",color:"#454949"}}>No more waiting in the line to get that appointment</Typography>
            <Typography sx={{color:"white",borderRadius:"5px",fontWeight:"bold",float: "right",backgroundColor:"#08090B",padding:"7px"}}>FREE</Typography>
          </Box>

        </Box>


          

        <Box sx={{ flex: "50%",justifyContent:"center",alignItems:"center",display:"flex"}}>
          <img src={homeImage} alt="This is an home Image" style={{height:"90%"}} />
        </Box>




        </Box>


    </div>
  )
}

export default Home