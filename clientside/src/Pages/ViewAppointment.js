import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';




export default function ViewAppointment() {

    const [initial,setInitial]=useState([])

    let statusCode

const getAppointment = async () => {
    await fetch("http://localhost:4222/api/appointment/get", {
      method: "GET",
     
      headers: {
        "Content-Type": "application/json",
        
      },
    })
      .then((res) => {
        statusCode=res.status
        return res.json()})
      
      .then((res) => {
     
        if (statusCode === 400) {
          console.log("error")
        }
        if (statusCode === 200) {
          
       setInitial(res)

          
          
        }
      });
  };

  useEffect(()=>{
    getAppointment()
  },[])




  return (
    
    <TableContainer  sx={{background: "blur(10px)",backdropFilter: "saturate(130%) blur(10px)",boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",padding:"3rem",height:"70vh",maxWidth:"50vw",borderRadius:"35px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell sx={{fontWeight:"bold",fontSize:"17px"}} align="left">First Name</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:"17px"}} align="left">Last Name</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:"17px"}} align="left">Time</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:"17px"}} align="left">Date</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:"17px"}} align="left">City</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:"17px"}} align="left">Room No</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:"17px"}} align="left">Diagnosed</TableCell>
            <TableCell sx={{fontWeight:"bold",fontSize:"17px"}} align="left">Reason</TableCell>



          
          </TableRow>
        </TableHead>
        <TableBody>
          {initial &&  initial.map((row) => (

            
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
                
              </TableCell>
              
              <TableCell align="left">{row.lastName}</TableCell>
              <TableCell align="left">{row.aptTime}</TableCell>
              <TableCell align="left">{row.aptDate}</TableCell>
              <TableCell align="left">{row.city}</TableCell>
              <TableCell align="left">{row.room}</TableCell>
              <TableCell align="left">{row.diagnosis}</TableCell>
              <TableCell align="left">{row.reason}</TableCell>

              

              

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}