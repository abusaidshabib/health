import logo from './logo.svg';
import './App.css';
import router from './Routes/Router/Router';
import { RouterProvider } from 'react-router-dom';
import ApiContext from './Context/ApiContext/ApiContext';
import UserContext from './Context/UserContext/UserContext';

function App() {
  return (
    <div className="App">
      <UserContext>
        <ApiContext>
          <RouterProvider router={router}></RouterProvider>
        </ApiContext>
      </UserContext>
    </div>
  );
}

export default App;
