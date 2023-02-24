import logo from './logo.svg';
import './App.css';
import router from './Routes/Router/Router';
import { RouterProvider } from 'react-router-dom';
import ApiContext from './Context/ApiContext/ApiContext';

function App() {
  return (
    <div className="App">
      <ApiContext>
        <RouterProvider router={router}></RouterProvider>
      </ApiContext>
    </div>
  );
}

export default App;
