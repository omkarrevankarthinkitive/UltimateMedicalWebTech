import React from "react";
import { json, Navigate, Outlet } from "react-router-dom";
  
function calling(){
  let protectedData=
  {
    Authorization:localStorage.getItem("token")
  }
  getToken(protectedData)
}


let finalVal=false
async function getToken(data){
  await fetch("http://localhost:4222/api/users/verify",{
  method:"POST",
  body:JSON.stringify(data),
  headers:{"Content-Type": "application/json"},
}
).then((res) => res.json())
.then((res)=>{
  if(res.val==true){
    finalVal=true
  }
})
}
calling()



function ProtectedRoutes() {
  

  return finalVal ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
