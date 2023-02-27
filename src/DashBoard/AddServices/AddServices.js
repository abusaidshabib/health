import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {

  useTitle("AddServices");

  const [size, setSize] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setSize(data.length))
  }, [])

  const handleSubmitService = event => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const url = form.url.value;
    const details = form.details.value;
    const price = form.price.value;
    const index = `${size + 1}`;

    const serviceData = {
      image: url,
      index,
      title,
      details,
      price
    }

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(serviceData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset();
          toast("Service Add");
        }
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='form_div'>
      <h1 className='title_2'>Add A service</h1>
      <form onSubmit={handleSubmitService}>

        <label htmlFor="title">
          Service Title
        </label>
        <input className='field_input' type="text" name="title" id="title" />

        <label htmlFor="url">
          Service Image URL
        </label>
        <input className='field_input' type="url" name="url" id="url" />

        <label htmlFor="details">
          Service Details
        </label>
        <textarea className='field_input' rows="3" cols="" type="text" name='details' required></textarea><br /><br /> <br /> <br /> <br />

        <label htmlFor="price">
          Set Price of Service
        </label>
        <input className='field_input' type="number" name="price" id="price" />
        <br /> <br /> <br />

        <input className='input_btn_submit' type="submit" value="Add a service" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddServices;