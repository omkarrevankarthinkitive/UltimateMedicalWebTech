import React from 'react'
import {Button,Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Box} from "@mui/material"


function ReferencePhy() {
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
       APPOINTEMNT
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

            <Box sx={{display:"flex" ,gap:"20px",margin:"1rem"}}>
            <Box style={{flex:1}}> 
            <p>Cell Phone</p>
            <input style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}} />
            </Box>
            <Box style={{flex:1}}>
            <p>FAX</p>
            <input  style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}}  />
            
            </Box>
            
            </Box>


            <Box sx={{display:"flex" ,gap:"20px",margin:"1rem"}}>
            <Box style={{flex:1}}> 
            <p>Email</p>
            <input style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}} />
            </Box>
            <Box style={{flex:1}}>
            <p>NPI</p>
            <input  style={{width:"100%",border:"none",backgroundColor:"#eef0f1",height:"40px",padding:"8px 15px"}}  />
            
            </Box>
            
            </Box>




            
           

            
           
            
         


            
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button  sx={{margin:"1rem "}} variant='contained' onClick={handleClose}>CONFIRM BOOKING</Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default ReferencePhy