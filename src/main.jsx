import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[{
      path: '/',
      element:<HomePage></HomePage>
    },
    {
      path:'/sign-up',
      element:<SignUp></SignUp>
    },
    {
      path:'/sign-in',
      element:<SignIn></SignIn>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
