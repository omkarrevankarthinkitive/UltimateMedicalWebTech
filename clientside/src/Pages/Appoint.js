import React from 'react'
// import SideBar from '../components/ui/Sidebar'
import { HorizontalNonLinearStepper } from './AddAppointment'
import TableMain from '../components/ui/TableMain'
function Appoint() {
  return (
    <div style={{display:"flex"}}>
      {/* <SideBar/> */}
      <div>
      <HorizontalNonLinearStepper />
      {/* <TableMain/> */}
      </div>
      
       </div>
  )
}

export default Appoint