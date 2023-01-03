
import { Button, Typography,InputLabel,Select,MenuItem } from '@mui/material'
import { Box } from '@mui/system'
import {useState} from 'react'




// importing the image

import homeImage from "../assets/homeImage.jpg"

import {Link} from "react-router-dom"

function Signup() {


//for dropdown
const [role, setRole] =useState('');

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };



  return (
    <div style={{padding:"83px 75px",backgroundColor:"#D3D3D3"}}>


        <Box sx={{display:"flex",backgroundColor:"#F3F3F3",borderRadius:"25px"}} >
         

        <Box sx={{padding:"30px",alignItems:"center", flex: "50%"}}>
        
          <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",justifyContent:"space-between"}}>
            <Typography sx={{fontFamily:"Unbounded",fontSize:"2.5rem",color:"#08090B"}}  ><Link to="/" style={{textDecoration:"none",color:"#08090B"}}>DOOK ®</Link></Typography>
            
          </Box>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
          <Typography sx={{fontSize:"3rem",marginTop:"5rem"}}>Create your Account</Typography>
           <Typography sx={{fontSize:"1 rem",fontWeight:"bold",color:"#08090B"}}>Enter the fields bellow to get started</Typography>
           <Box sx={{display:"flex",flexDirection:"column",gap:"25px",marginTop:"30px"}}>
           <input type="text"  style={{width:'500px',height:"40px",padding:"5px",border:"1px solid #CECCC1 ",backgroundColor:"transparent"}}placeholder="Name" />
             <input type="text" style={{width:'500px',height:"40px",padding:"5px",border:"1px solid #CECCC1 ",backgroundColor:"transparent"}} placeholder="E-Mail"/>
             <input type="password" style={{width:'500px',height:"40px",padding:"5px",border:"1px solid #CECCC1 ",backgroundColor:"transparent"}} placeholder="password"/>
             <input type="number" style={{width:'500px',height:"40px",padding:"5px",border:"1px solid #CECCC1 ",backgroundColor:"transparent"}} placeholder="Phone Number"/>

             <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={role}
        label="Age"
        onChange={handleChangeRole}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="User">User</MenuItem>
        <MenuItem value="Doctor">Doctor</MenuItem>
        
      </Select>
             
             <Button variant='contained' sx={{backgroundColor:"#08090B", '&:hover': {backgroundColor: "black"}}}>Sign up</Button>  
             <Typography sx={{color:"grey"}}>Already have an account? <Link to="/api/login" style={{textDecoration:"none",color:"#08090B"}}>Login</Link></Typography>
           </Box>
             
          </Box>
           



          

        </Box>


          

        <Box sx={{ flex: "50%",justifyContent:"center",alignItems:"center",display:"flex"}}>
          <img src={homeImage} alt="This is an home Image" style={{height:"620px"}} />
        </Box>




        </Box>


    </div>
  )
}

export default Signup