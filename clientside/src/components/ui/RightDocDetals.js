import React from 'react'
import { Box,Button } from '@mui/material'
import {useNavigate,Link} from "react-router-dom"
import AddAppointment from '../../Pages/AddAppointment'
function RightDocDetals({allData}) {

    const nevigate=useNavigate()

    function bookmyaptFunc(){
        nevigate("/api/apt")
    }
  return (
    <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
         <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">{allData?.doctorName}</h3>

                            {
                               allData && allData.qualification && allData.qualification.map((item)=>{
                                return (
                                    <h6 className="theme-color lead">{item}</h6>
                                )
                                })
                            }
                            
                            <p>{allData?.aboutMyself}</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                <div className="media">
                                        <label>Clinic</label>
                                        <p>{allData?.clinicName}</p>
                                    </div>
                                    <div className="media">
                                        <label>Gender</label>
                                        <p>{allData?.Gender}</p>
                                    </div>
                                    
                                    <div className="media">
                                        <label>Address</label>
                                        <p>California, USA</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>info@domain.com</p>
                                    </div>
                                    <div className="media">
                                        <label>phone</label>
                                        <p>{allData?.phoneNumber}</p>
                                    </div>
                                    <div className="media">
                                        <label>Skype</label>
                                        <p>skype.0404</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src={allData?.img} style={{height:"350px",width:"350px"}} title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                                <p className="m-0px font-w-600">operations Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                                <p className="m-0px font-w-600">Telephonic Treatment</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Home Treatment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default RightDocDetals