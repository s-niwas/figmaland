import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path:"/welcome",
    element:<WelcomeScreen/>
  },
  {
    path:"/login",
    element:<LoginScreen/>
  },
  {
    path:"/home",
    element:<></>
  },
  {
    path:"/forgotpassword",
    element:<></>
  },
  {
    path:"/signup",
    element:<SignUpScreen/>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();