import React from 'react';

const AddServices = () => {
  return (
    <div className='form_div'>
      <h1 className='title_2'>Add A service</h1>
      <form>

        <label htmlFor="text">
          Service Title
        </label>
        <input className='field_input' type="text" name="text" id="text" />

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

        <input className='input_btn_submit' type="submit" value="Register" />
      </form>
    </div>
  );
};

export default AddServices;