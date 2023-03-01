import React, { useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { AuthContext } from '../UserContext/UserContext';

export const ApiDataContext = createContext()

const ApiContext = ({ children }) => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState("Urgent care");
  const [faq, setFaq] = useState([]);


  useEffect(() => {
    fetch("https://health-plus-backend.vercel.app/services")
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  useEffect(() => {
    fetch("https://health-plus-backend.vercel.app/faq")
      .then(res => res.json())
      .then(data => setFaq(data))
  }, [])

  console.log(services);

  const value = {
    services, service, setService, faq
  }

  return (
    <ApiDataContext.Provider value={value}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiContext;
