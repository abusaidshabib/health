import React from 'react';
import "./MyReview.css";

const MyReviews = () => {
  return (
    <div className='my_review_div'>
      <div className='Author_div'>
        <div>
          <img src="" alt="" />
          <h1 className='title_3'>Name</h1>
          <p>Email</p>
        </div>
      </div>

      <div>
        <div>
          <h1 className='title_3'>name of service</h1>
          <p>my review</p>
          <div>
            <p>Edit</p>
            <p>Delete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;