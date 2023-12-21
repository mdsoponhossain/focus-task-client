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
import Dashboard from './Pages/Dashboard/Dashboard';
import ToDos from './Components/ToDos/ToDos';
import OnGoing from './Components/OnGoing/OnGoing';
import Completed from './Components/Completed/Completed';
import OverView from './Components/OverView/OverView';

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
  {
   path:'/dashboard',
   element:<Dashboard></Dashboard>,
   children:[{
    path:'to-dos',
    element:<ToDos></ToDos>
   },
  {
    path:'on-going',
    element:<OnGoing></OnGoing>
  },
  {
    path:'completed',
    element:<Completed></Completed>
  },
  {
    path:'/dashboard',
    element:<OverView></OverView>
  }
]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
