import React from 'react';
import { Link } from 'react-router-dom';
import "./PopUp.css";

const PopUp = ({ popUp, setPopUp, handleClick }) => {

const handleEditSubmit = (event) => {
  event.preventDefault();
  const upData = event.target.review.value;
  console.log(upData);
}

const reFetch = () => {
  // handleClick();
  setPopUp("");
}

  return (
    <div className='popUp_compo'>
      <div>
        <h1 className='title_3'>{popUp?.title}</h1>
        <br />
        <form onSubmit={handleEditSubmit}>
          <input className='field_input' type="text" name="review" id="" defaultValue={popUp?.review} /><br />
          <br />
          <input className='orangeBtn' type="submit" value="Submit" />
          <Link onClick={reFetch} className='orangeBtn'>Close</Link>
        </form>
      </div>
    </div>
  );
};

export default PopUp;