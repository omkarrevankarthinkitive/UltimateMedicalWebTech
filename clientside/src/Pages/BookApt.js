import { Typography,Box } from '@mui/material'
import { AppointmentPicker } from 'react-appointment-picker'
import React,{useEffect,useState} from 'react'

function BookApt() {
    const [lodaing, setLoading] = useState(false);
    const [date, setDate] = useState(new Date(new Date().setHours(10, 0, 0, 0)));
    const [there,setThere]=useState(false)
    const [days ,setDays]=useState([])

    const [appointment, setAppointment] = useState("");

    let statusCode



    useEffect( () => {
        if (date != null ) {
         

            getAppointment()
     
            
            






        //   const days = [
        //     [
        //         { id: 1, number: 1, isSelected: true, periods: 2 },
        //         { id: 2, number: 2 },
        //         null,
        //         { id: 3, number: '3', isReserved: true },
        //         { id: 4, number: '4' },
        //         null,
        //         { id: 5, number: 5 },
        //         { id: 6, number: 6 },
        //         { id: 8, number: 7 }
        //       ],
        //       [
        //         { id: 9, number: 1, isReserved: true, periods: 2 },
        //         { id: 10, number: 2, isReserved: true },
        //         null,
        //         { id: 11, number: '3', isReserved: true },
        //         { id: 12, number: '4' },
        //         null,
        //         { id: 13, number: 5 },
        //         { id: 14, number: 6 },
        //         { id: 15, number: 7 },

        //       ],
        //       [
        //         { id: 16, number: 1 },
        //         { id: 17, number: 2 },
        //         null,
        //         { id: 18, number: 3, isReserved: true },
        //         { id: 19, number: '4' },
        //         null,
        //         { id: 20, number: 5 },
        //         { id: 21, number: 6 },
        //         { id: 22, number: 7 },
        //       ],
        //       [
        //         { id: 23, number: 1 },
        //         { id: 24, number: 2 },
        //         null,
        //         { id: 25, number: 3 },
        //         { id: 26, number: '4' },
        //         null,
        //         { id: 27, number: 5 },
        //         { id: 28, number: 6 },
        //         { id: 29, number: 7 },
        //       ],
        //       [
        //         { id: 30, number: 1, isReserved: true },
        //         { id: 31, number: 2 },
        //         null,
        //         { id: 32, number: '3', isReserved: true },
        //         { id: 33, number: '4' },
        //         null,
        //         { id: 34, number: 5 },
        //         { id: 35, number: 6, isReserved: true },
        //         { id: 36, number: 7 },
        //       ]
        //   ];


        setAppointment(
            <AppointmentPicker
              addAppointmentCallback={addAppointmentCallbackContinuousCase}
              removeAppointmentCallback={removeAppointmentCallbackContinuousCase}
              initialDay={date}
              days={days}
              maxReservableAppointments={1}
              alpha
              visible
              selectedByDefault
              unitTime={3600000}
              loading={lodaing}
              continuous
            />
          );
        }
      }, [date, lodaing,there]);



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
              
      console.log(res,"resss")
              setDays(res.fields)
              setThere(true)
    
              
              
            }
          });
      };


      async function addAppointmentCallbackContinuousCase({
        addedAppointment: { day, number, time, id },
        addCb,
        removedAppointment: params, 
        removeCb
      }) {
        setLoading(true);
        if (removeCb) {
          //await removeAppointment({ params });
          console.log(
            `Removed appointment ${params.number}, day ${params.day}, time ${params.time}, id ${params.id}`
          );
          removeCb(params.day, params.number);
        }
    
        //await addAppointment({ id, number, day, time });
        //console.log(error);
        addCb(day, number, time, id);
        console.log(days)
        setLoading(false);
      }

      async function removeAppointmentCallbackContinuousCase(
        { day, number, time, id },
        removeCb
      ) {
        setLoading(true);
        let params = { id, number, day, time };
        //await removeAppointment({ params });
        console.log(
          `Removed appointment ${number}, day ${day}, time ${time}, id ${id}`
        );
        removeCb(day, number);
        setLoading(false);
      }

  return (
    <div>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}} >
            {days && appointment}
        </Box>
    </div>
  )
}

export default BookApt