import React, { useEffect, useState } from 'react';
import { createContext } from "react";

export const ApiDataContext = createContext()

const ApiContext = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
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
