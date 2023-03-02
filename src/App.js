import './App.css';
import router from './Routes/Router/Router';
import { RouterProvider } from 'react-router-dom';
import ApiContext from './Context/ApiContext/ApiContext';
import UserContext from './Context/UserContext/UserContext';
import { motion, useScroll } from "framer-motion";

function App() {

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="App">
        <UserContext>
          <ApiContext>
            <RouterProvider router={router}></RouterProvider>
          </ApiContext>
        </UserContext>
      </div>
    </>
  );
}

export default App;
