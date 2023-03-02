import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../Components/BottomNav';
import { AuthContext } from '../Context/UserContext/UserContext';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {

  const { preLoading } = useContext(AuthContext);

  return (
    <div>
      {
        !preLoading && <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <BottomNav></BottomNav>
          <Footer></Footer>
        </>
      }
    </div>
  );
};

export default Main;