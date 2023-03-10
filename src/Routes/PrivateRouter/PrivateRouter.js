import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { AuthContext } from '../../Context/UserContext/UserContext';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className='align_loader_center'>
      <ClipLoader loading={loading}/>
    </div>
  }


  if (user && user?.uid) {
    return children;
  }
  
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;