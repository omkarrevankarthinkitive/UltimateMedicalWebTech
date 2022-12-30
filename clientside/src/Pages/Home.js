import { Button, Typography } from '@mui/material'
import { Box, padding } from '@mui/system'
import React from 'react'

function Home() {
  return (
    <div>


        <Box>
         

        <Box sx={{padding:"20px",alignItems:"center"}}>
        
          <Box sx={{display:"flex"}}>
            <Typography sx={{fontFamily:"Unbounded"}} >DOOK</Typography>
            <Button  variant='outlined'sx={{color:"black",border:"2px solid black",borderRadius:"30px",fontWeight:"bold"}}>Login</Button>
          </Box>


        </Box>


          

        <Box></Box>




        </Box>


    </div>
  )
}

export default Home