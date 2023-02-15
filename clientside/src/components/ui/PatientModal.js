import React from 'react'
import {Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Box} from "@mui/material"
import Select from 'react-select';
import ReferencePhy from './ReferencePhy';

function PatientModal() {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
      };
      const handleClose = () => {
        setOpen(false); 
      };     

 
    
    
  return (
    
         <div>
      <Button variant='contained' onClick={handleClickOpen('paper')}>NEXT</Button>
      
      <Dialog
       fullWidth
       
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">+ Add Appointment</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            
            tabIndex={-1}
          >
            <h4 style={{fontWeight:"bold",color:"black",margin:"0.5rem 1rem "}} >Patient Details</h4>
           <Box sx={{display:"flex" ,gap:"20px",margin:"1rem"}}>
            <Box style={{flex:1}}> 
            <p>First Name</p>
            <input style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}} />
            </Box>
            <Box style={{flex:1}}>
            <p>Last Name</p>
            <input  style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}}  />
            
            </Box>
            </Box>
            <Box sx={{display:"flex" ,margin:"1rem",flexDirection:"column"}}>
                <p style={{display:"block"}}>Date of Birth</p>
                <input style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}} type="date"/>
            </Box>

            <Box sx={{display:"flex" ,gap:"20px",margin:"1rem"}}>
            <Box style={{flex:1}}> 
            <p>Gender</p>
            <input style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}} />
            </Box>
            <Box style={{flex:1}}>
            <p>Cell Phone</p>
            <input  style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}}  />
            
            </Box>
           

            
           </Box>
            
           <Box sx={{margin:"1rem"}} >
            <p>Home Phone</p>
            <input  style={{width:"48%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}}  />
            </Box>

            <Box sx={{display:"flex" ,margin:"1rem",flexDirection:"column"}}>
                <p style={{display:"block"}}>Email</p>
                <input style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}} />
            </Box>

            <Box sx={{margin:"1rem"}}>
                <p>Address</p>
                <input placeholder='Address' style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}} />
                   
            </Box>
            <Box sx={{display:"flex" ,margin:"1rem",gap:"20px"}}>
                <input placeholder='province' style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px",flex:1}}/>
                <input  placeholder="City" style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px",flex:1}}/>

            </Box>
            <Box sx={{margin:"1rem"}}>
                <input placeholder='Postal Code' style={{width:"48%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}}/>
            </Box>


            
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
         <ReferencePhy/>
         
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default PatientModal