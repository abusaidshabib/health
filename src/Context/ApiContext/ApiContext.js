import React, { useContext, useEffect, useState } from 'react';
import { createContext } from "react";
import { AuthContext } from '../UserContext/UserContext';

export const ApiDataContext = createContext()

const ApiContext = ({ children }) => {
  const [services, setServices] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  console.log(services);

  const value = {
    services
  }

  return (
    <ApiDataContext.Provider value={value}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiContext;
