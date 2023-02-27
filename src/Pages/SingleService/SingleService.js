import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../hooks/useTitle';
import "./SingleService.css";

const SingleService = () => {



  const { user } = useContext(AuthContext);
  const { title, image, details, price, _id } = useLoaderData();
  useTitle(`${title}`);
  const [reviews, setReviews] = useState([]);

  const handleSubmitReview = event => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    const sendreview = {
      auth_img: user.photoURL,
      sid: _id,
      email: user.email,
      name: user.displayName,
      review: review,
      title: title
    }
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(sendreview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          form.reset();
          toast("review add")
        }
      })
      .catch(error => console.error(error));

  }

  useEffect(() => {
    fetch(`http://localhost:5000/reviews/${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data.reverse()))
  })

  return (
    <div className='single_service_page'>
      <h1 className='title_2'>{title}</h1>
      <div className='single_img_div'>
        <img src={image} alt="" />
      </div>
      <p className='para_2'>{details}</p>
      <div className='service_button_sec'>
        <p className='para_2'><b>Price:</b> <span>{price}$</span></p>
        <Link className='orangeBtn' to="/">Book Now</Link>
      </div>
      <div className='review_sin_div'>
        {
          reviews.slice(0, 3).map(review =>
            <div className='service_rev'>
              <img src={review.auth_img} alt="" />
              <div>
                <h3 className='title_3'>{review.name}</h3>
                <p className='para_1'>{review.review}</p>
              </div>
            </div>
          )
        }
      </div>
      <form onSubmit={handleSubmitReview} className='add_review'>
        <h1 className='title_3'>Add your review</h1>
        <input className='field_input' type="text" name="review" id="" required />
        <input className='orangeBtn' type="submit" value="Submit" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingleService;