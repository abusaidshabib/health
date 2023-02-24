import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../Components/BottomNav';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <BottomNav></BottomNav>
      <Footer></Footer>
    </div>
  );
};

export default Main;