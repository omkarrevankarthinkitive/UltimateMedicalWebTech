import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import {NavLink} from "react-router-dom"

 
import {Typography,Box} from "@mui/material"

function SideBar({newLocation}) {
  const { collapseSidebar } = useProSidebar();
  console.log(newLocation)

  return (
    
      <Sidebar backgroundColor="#FFFDF1"  style={{fontWeight:"bold",height:"100vh",color:"#003450"}}>
        <Menu >
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: "right" }}
          >
          
            <Box sx={{display:"flex"}}>  
      <Typography sx={{fontSize:"1.3rem",fontWeight:"bold",letterSpacing:"3px"}} >DOOK®</Typography></Box> 
          </MenuItem> 

          <MenuItem icon={<HomeOutlinedIcon />}><NavLink to={`/api/doctordetails/${newLocation}`} style={{color:"#454949",textDecoration:"none"}}>Doctor Details</NavLink> </MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}><NavLink to="/api/doctordetails/addappointment" style={{color:"#454949",textDecoration:"none"}}>add Appointment</NavLink></MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}><NavLink to="/api/doctordetails/view" style={{color:"#454949",textDecoration:"none"}}>View Appointment</NavLink> </MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
     
    
  );
}

export default SideBar;