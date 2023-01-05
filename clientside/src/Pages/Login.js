import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React,{useState} from 'react'

// importing the image

import homeImage from "../assets/homeImage.jpg"

import {Link,useNavigate} from "react-router-dom"



function Login() {



  const [emailer, setEmailer] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const SubmitHandler = (event) => {
    event.preventDefault();
    const loginCredential = {
      email: emailer,
      password: password,
    };
    console.log(loginCredential)
    login(loginCredential);
  };
  let statusCode
  let fontToken

  const login = async (data) => {
    await fetch("http://localhost:4222/api/users/login", {
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
        if (statusCode === 201) {
          console.log("data: ", res);
          

          localStorage.setItem("token", res.token);

          localStorage.setItem("user_id", res._id);
        
          setTimeout(() => {
            localStorage.setItem("islogin", true);
            
            navigate("/api/dashboard");
          }, 2000);
          
        }
      });
  };


  return (
    <div style={{padding:"83px 75px",backgroundColor:"#D3D3D3"}}>


        <Box sx={{display:"flex",backgroundColor:"#F3F3F3",borderRadius:"25px"}} >
         

        <Box sx={{padding:"30px",alignItems:"center", flex: "50%"}}>
        
          <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",justifyContent:"space-between"}}>
            <Typography sx={{fontFamily:"Unbounded",fontSize:"2.5rem",color:"#08090B"}}  ><Link to="/" style={{textDecoration:"none",color:"#08090B"}}>DOOK ®</Link></Typography>
            
          </Box>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
          <Typography sx={{fontSize:"3rem",marginTop:"3rem"}}>Welcome Back</Typography>
           <Typography sx={{fontSize:"1 rem",fontWeight:"bold",color:"#08090B"}}>Welcome back,please enter your details</Typography>
           <Box sx={{display:"flex",flexDirection:"column",gap:"25px",marginTop:"30px"}}>
           <input style={{width:'500px',height:"40px",padding:"5px",border:"1px solid #CECCC1 ",backgroundColor:"transparent"}} value={emailer} type="text" placeholder="E-Mail" onChange={(e)=> setEmailer(e.target.value)}/>
             <input style={{width:'500px',height:"40px",padding:"5px",border:"1px solid #CECCC1 ",backgroundColor:"transparent"}} value={password} type="password"  placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
             <Button variant='contained' sx={{backgroundColor:"#08090B", '&:hover': {backgroundColor: "black"}, }} onClick={SubmitHandler}>Login</Button>  
             <Typography sx={{color:"grey"}}>Don't have an account? <Link to="/api/users" style={{textDecoration:"none",color:"#08090B"}}>Sign up for free</Link></Typography>
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

export default Login