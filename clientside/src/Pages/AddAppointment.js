import React from "react";
import { useState } from "react";
import { Button, Box, Typography, MenuItem ,Select} from "@mui/material";
// import Select from "react-select";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

// import PatientModal from '../components/ui/PatientModal';
// function AddAppointment() {
//     const [open, setOpen] = React.useState(false);
//     const [scroll, setScroll] = React.useState('paper');
//     const handleClickOpen = (scrollType) => () => {
//         setOpen(true);
//         setScroll(scrollType);
//       };
//       const handleClose = () => {
//         setOpen(false);
//       };



//   return (

//          <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"20px"}} >
//           <div>
//             <h1 style={{color:"#454949"}}>CLICK BELLOW TO ADD AN APPOINTEMNT  </h1>
//           </div>
//       <Button variant='contained' onClick={handleClickOpen('paper')} sx={{height:"5rem",width:"20rem",fontSize:"1.5rem",backgroundColor:"#454949"}}>Add Appointment</Button>

//       <Dialog
//        fullWidth
//         open={open}
//         onClose={handleClose}
//         scroll={scroll}
//         aria-labelledby="scroll-dialog-title"
//         aria-describedby="scroll-dialog-description"
//       >
//         <DialogTitle id="scroll-dialog-title"> + Add Appointment</DialogTitle>
//         <DialogContent dividers={scroll === 'paper'}>
//           <DialogContentText
//             id="scroll-dialog-description"

//             tabIndex={-1}
//           >
//             <Box sx={{margin:"1rem"}}>
//             <h3>Appointment Reason</h3>
//             <input placeholder='Reason' style={{border:"none",backgroundColor:"#eef0f1",width:"100%",height:"40px",padding:"8px 15px"}} />

//             </Box>

//             <Box sx={{margin:"1rem"}}>
//             <h3>Diagnosis</h3>
//             <Select isMulti name=""
//             className="basic-multi-select"
//             classNamePrefix="select"
//             placeholder="Add new item"
//             sx={{border:"none",backgroundColor:"#eef0f1",width:"100%"}}
//             options={options}
//             />
//             </Box>

//             <Box sx={{margin:"1rem"}}>
//                 <h3>Location</h3>
//                 <input placeholder='Type Location' style={{border:"none",backgroundColor:"#eef0f1",width:"100%",height:"40px",padding:"8px 15px"}}  />

//             </Box>
//             <Box sx={{margin:"1rem"}}>
//                 <h3>Room</h3>
//                 <input placeholder="Room No" style={{border:"none",backgroundColor:"#eef0f1",width:"100%",height:"40px",padding:"8px 15px"}} />
//             </Box>

//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>

//         <PatientModal/>
//         </DialogActions>
//       </Dialog>

//     </div>
//   )
// }

// export default AddAppointment

const steps = [
  "Select Location and Room",
  "Fill the details",
  "set an appointment",
];

const initalState = {
  reason: "",
  location: "",
  room: "",
  diagnosis: "",
  firstName: "",
  lastName: "",
  dob: "",
  gender: "",
  cellPhone: "",
  homePhone: "",
  email: "",
  address: "",
  Province: "",
  city: "",
  postalCode: "",
  aptTime: "",
  aptDate: "",
};

export const HorizontalNonLinearStepper = () => {
  const [user, setUser] = useState(initalState);

  const [activeStep, setActiveStep] = useState(0);
  const [change,setChange]=useState(false)
  const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  console.log("Here");

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const aptFunction = async (data) => {
    await fetch("http://localhost:4222/api/appointment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })

      .then((res) => {
        if (statusCode === 400) {
          console.log(res + "wwwwwwwwww");
        }
        if (statusCode === 201) {
          console.log("data: ", res);
        }
      });
  };

  const SubmitHandler = (event) => {
    const AddAppointmentPost = {
      reason: user.reason,
      location: user.location,
      room: user.room,
      diagnosis: user.diagnosis,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      gender: user.gender,
      cellPhone: user.cellPhone,
      homePhone: user.homePhone,
      email: user.email,
      address: user.address,
      Province: user.Province,
      city: user.city,
      postalCode: user.postalCode,
      aptTime: user.aptTime,
      aptDate: user.aptDate,
    };

    aptFunction(AddAppointmentPost);
  };
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  let statusCode;

  

  return (
    <Box
      sx={{
        width: "80%",
        background: "blur(10px)",
        backdropFilter: "saturate(130%) blur(10px)",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
        padding: "3rem",
        borderRadius:"35px"
      }}
    >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        { change? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={()=>{handleReset()}}
                sx={{ color: "white", fontWeight: "bold" }}
              >
                Reset
              </Button>                                     
            </Box>
          </>
        ) : (
          <>
            {activeStep + 1 === 1 ? (
              <>
                <Box sx={{ margin: "1rem" }}>
                  <h3>Appointment Reason</h3>
                  <input
                    value={user?.reason}
                    onChange={handleChange}
                    placeholder="Reason"
                    style={{
                      border: "none",
                      backgroundColor: "#eef0f1",
                      width: "100%",
                      height: "40px",
                      padding: "8px 15px",
                    }}
                    name="reason"
                  />
                </Box>

                <Box sx={{ margin: "1rem" }}>
                  <h3>Location</h3>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={user.location}
                    
                    onChange={handleChange}
                    name="location"
                    sx={{height: "40px", width:"100%",backgroundColor: "#eef0f1" }}
                  >
                    <MenuItem value="Pune">
                      Pune
                    </MenuItem>
                    <MenuItem value="Mumbai">Mumbai</MenuItem>
                    <MenuItem value="Bangalore">Bangalore</MenuItem>
                  </Select>
                 
                </Box>
                <Box sx={{ margin: "1rem" }}>
                  <h3>Room</h3>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={user.room}
                    
                    onChange={handleChange}
                    name="room"
                    sx={{ height: "40px",width:"100%",backgroundColor: "#eef0f1" }}
                  >
                    <MenuItem value={1}>
                      1
                    </MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                
                </Box>
                <Box sx={{ margin: "1rem" }}>
                  <h3>Diagnosis</h3>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={user.diagnosis}
                    
                    onChange={handleChange}
                    name="diagnosis"
                    sx={{ height: "40px",width:"100%",backgroundColor: "#eef0f1" }}
                  >
                    <MenuItem value="covid">
                    covid
                    </MenuItem>
                    <MenuItem value="Diarrhea">Diarrhea</MenuItem>
                    <MenuItem value="Chickenpox">Chickenpox</MenuItem>
                    <MenuItem value="diabetes">diabetes</MenuItem>

                  </Select>
                 
                </Box>
              </>
            ) : activeStep + 1 === 2 ? (
              <>
                <h4
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    margin: "0.5rem 1rem ",
                  }}
                >
                  Patient Details
                </h4>
                <Box sx={{ display: "flex", gap: "20px", margin: "1rem" }}>
                  <Box style={{ flex: 1 }}>
                    <p>First Name</p>
                    <input
                      value={user?.firstName}
                      onChange={handleChange}
                      name="firstName"
                      style={{
                        width: "100%",
                        border: "none",
                        backgroundColor: "#eef0f1",
                        height: "40px",
                        padding: "8px 15px",
                      }}
                    />
                  </Box>
                  <Box style={{ flex: 1 }}>
                    <p>Last Name</p>
                    <input
                      value={user?.lastName}
                      onChange={handleChange}
                      name="lastName"
                      style={{
                        width: "100%",
                        border: "none",
                        backgroundColor: "#eef0f1",
                        height: "40px",
                        padding: "8px 15px",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    margin: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ display: "block" }}>Date of Birth</p>
                  <input
                    value={user?.dob}
                    onChange={handleChange}
                    name="dob"
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                    }}
                    type="date"
                  />
                </Box>

                <Box sx={{ display: "flex", gap: "20px", margin: "1rem" }}>
                  <Box style={{ flex: 1 }}>
                    <p>Gender</p>
                    <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={user.gender}
                    
                    onChange={handleChange}
                    name="gender"
                    sx={{ border: "1px solid black",width:"100%",backgroundColor: "#eef0f1",height: "40px" }}
                  >
                    <MenuItem value="Male">
                    Male
                    </MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                    

                  </Select>
                  
                  </Box>
                  <Box style={{ flex: 1 }}>
                    <p>Cell Phone</p>
                    <input
                      value={user?.cellPhone}
                      onChange={handleChange}
                      name="cellPhone"
                      style={{
                        width: "100%",
                        border: "none",
                        backgroundColor: "#eef0f1",
                        height: "40px",
                        padding: "8px 15px",
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ margin: "1rem" }}>
                  <p>Home Phone</p>
                  <input
                    value={user?.homePhone}
                    onChange={handleChange}
                    name="homePhone"
                    style={{
                      width: "48%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    margin: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ display: "block" }}>Email</p>
                  <input
                    value={user?.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                    }}
                  />
                </Box>

                <Box sx={{ margin: "1rem" }}>
                  <p>Address</p>
                  <input
                    value={user?.address}
                    onChange={handleChange}
                    name="address"
                    placeholder="Address"
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                    }}
                  />
                </Box>
                <Box sx={{ display: "flex", margin: "1rem", gap: "20px" }}>
                  <input
                    value={user?.Province}
                    onChange={handleChange}
                    name="Province"
                    placeholder="province"
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                      flex: 1,
                    }}
                  />
                  <input
                    value={user?.city}
                    onChange={handleChange}
                    name="city"
                    placeholder="City"
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                      flex: 1,
                    }}
                  />
                </Box>
                <Box sx={{ margin: "1rem" }}>
                  <input
                    value={user?.postalCode}
                    onChange={handleChange}
                    name="postalCode"
                    placeholder="Postal Code"
                    style={{
                      width: "48%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                    }}
                  />
                </Box>
              </>
            ) : activeStep + 1 == 3 ? (
              <>
                <h4
                  style={{
                    fontWeight: "bold",
                    color: "black",
                    margin: "0.5rem 1rem ",
                  }}
                >
                  Patient Details
                </h4>

                <Box
                  sx={{
                    display: "flex",
                    margin: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ display: "block" }}>Appointment Time</p>
                  <input
                    onChange={handleChange}
                    name="aptTime"
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                    }}
                    type="time"
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    margin: "1rem",
                    flexDirection: "column",
                  }}
                >
                  <p style={{ display: "block" }}>Appointment Day</p>
                  <input
                    onChange={handleChange}
                    name="aptDate"
                    style={{
                      width: "100%",
                      border: "none",
                      backgroundColor: "#eef0f1",
                      height: "40px",
                      padding: "8px 15px",
                    }}
                    type="date"
                  />
                  <Button variant="contained" sx={{backgroundColor:"#ffff",color:"#1976D2","&:hover": { backgroundColor: "#ffff", color: "#1976D2",marginTop:"1rem" }}} onClick={()=>{SubmitHandler();setChange(true)}}>
                    FINISH
                  </Button>
                </Box>
              </>
            ) : null}

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  mr: 1,
                  color: "#1976D2",
                  backgroundColor: "#ffff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#ffff", color: "#1976D2" },
                }}
                variant="contained"
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={handleNext}
                sx={{
                  mr: 1,
                  color: "#1976D2",
                  backgroundColor: "#ffff",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#ffff", color: "#1976D2" },
                }}
                variant="contained"
              >
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    onClick={handleComplete}
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </>
        )}
      </div>
    </Box>
  );
};
