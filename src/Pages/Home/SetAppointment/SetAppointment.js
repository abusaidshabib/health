import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { ApiDataContext } from '../../../Context/ApiContext/ApiContext';
import { AuthContext } from '../../../Context/UserContext/UserContext';
import "./SetAppointment.css";

const SetAppointment = () => {
  const { services, service, setService } = useContext(ApiDataContext);
  const { user } = useContext(AuthContext);
  const [availables, setAvailable] = useState([]);

  useEffect(() => {
    fetch(`https://health-plus-backend.vercel.app/available/${service}`)
      .then(res => res.json())
      .then(data => setAvailable(data));
  }, [service])

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const service = form.title.value;
    const day = form.day.value;
    const time = form.time.value;
    const email = user?.email;

    const bookingData = {
      service, day, time, email
    }

    fetch("https://health-plus-backend.vercel.app/booking", {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(bookingData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset();
          toast("Service is booked")
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <div id='book_form' className='booking_main_form'>
      {
        user?.uid ?

          <div>
            <h1 className='title_2'>Book your need</h1>
            <form className='booking_form' onSubmit={handleBooking}>
              <div>
                <h6 className='title_3'>Select Service</h6>
                <select onChange={(event) => setService(event.target.value)} className="select_field" name="title" id="title">
                  {
                    services?.map(service => (
                      <option key={service._id} value={service.title}>{service.title}</option>
                    ))
                  }
                </select>
              </div>

              <div>
                <h1 className='title_3'>Select days</h1>
                <select className='select_field' name="day" id="day">
                  {
                    availables?.week?.map(
                      (available, index) =>
                        <option key={index} defaultValue={available}>{available}</option>
                    )
                  }
                </select>
              </div>

              <div>
                <h1 className='title_3'>Select times</h1>
                <select className='select_field' name="time" id="time">
                  {
                    availables?.time?.map(
                      (available, index) =>
                        <option key={index} defaultValue={available}>{available}</option>
                    )
                  }
                </select>
              </div>
              <input className='booking_btn' type="submit" value="Book Now" />
            </form>
          </div>
          :
          <h1 className='title_2'>Please login to book now</h1>
      }
      <ToastContainer />
    </div>
  );
};

export default SetAppointment;