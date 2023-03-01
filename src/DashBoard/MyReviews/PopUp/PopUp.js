import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./PopUp.css";

const PopUp = ({ popUp, handleClick, reFetch }) => {
  const [data, setData] = useState();

  const handleChange = event => {
    const field = event.target.name;
    const value = event.target.value;
    const updatedService = { ...popUp }
    updatedService[field] = value;
    setData(updatedService);
  }

  const handleEditSubmit = (event) => {
    fetch(`https://health-plus-backend.vercel.app/reviews/${popUp?._id}`, {
      method: 'PUT',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(data)
    })

      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast("Data Updated Successful")
          reFetch();
        }
      })
  }

  return (
    <div className='position_relative'>
      <div className='popUp_compo'>
        <div>
          <h1 className='title_3'>{popUp?.title}</h1>
          <br />
          <form onSubmit={handleEditSubmit}>
            <input onChange={handleChange} className='field_input' type="text" name="review" id="" defaultValue={popUp?.review} /><br />
            <br />
            <input className='orangeBtn' type="submit" value="Submit" />
            <Link onClick={reFetch} className='orangeBtn'>Close</Link>
          </form>
        </div>
      </div>
      <div className='position_absolute'>

      </div>
    </div>
  );
};

export default PopUp;