import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';
import useTitle from '../../hooks/useTitle';
import "./MyReview.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {

  useTitle("MyReviews")

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [popUp, setPopUp] = useState();

  console.log(popUp);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user?.email])
  console.log(user?.photoURL);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(`http://localhost:5000/review?email=${user?.email}`);
  //     const data = await response.json();
  //     setReviews(data);
  //   }

  //   fetchData();
  // }, [user?.email]);

  // function handleClick() {
  //   setReviews(null);
  // }

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you wanna delete this review');
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter(rev => rev._id !== id);
            setReviews(remaining);
            toast("Your file is deleted")
          }
        })
    }
  }

  return (
    <div className='my_review_div'>
      <div className='author_div'>
        <p className='para_1'>Author</p>
        <div>
          <img src={user?.photoURL} alt="no-img here" />
          <h3 className='title_3'>{user?.displayName}</h3>
          <p className='para_2'>{user?.email}</p>
        </div>
      </div>
      {/* <div className={`popUp_div ${popUp ? "visibility_on" : "visibility_off"}`}>
        <PopUp popUp={popUp} setPopUp={setPopUp} handleClick={handleClick}></PopUp>
      </div> */}
      <div className='review_div_main'>
        {
          reviews?.map(review => (
            <div key={review?._id} className='core_review'>
              <h3 className='title_3'><b>Service Title:</b> {review?.title}</h3>
              <p className='para_2'>{review?.review}</p>
              <div className='review_core_btn'>
                <Link onClick={() => setPopUp(review)} className='orangeBtn'>Edit</Link>
                <Link onClick={() => handleDelete(review?._id)} className='orangeBtn'>Delete</Link>
              </div>
            </div>
          ))
        }
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyReviews;