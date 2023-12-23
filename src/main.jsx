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
import OverView from './Components/OverView/OverView';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Form from './Components/Form/Form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateTask from './Components/UpdateTask/UpdateTask';
import AllTask from './Components/AllTask/AllTask';
import EditTask from './Components/EditTask/EditTask';
import AboutUs from './Pages/HomePage/Components/AboutUs/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [{
      path: '/',
      element: <HomePage></HomePage>
    },
    {
      path:'/about-us',
      element:<AboutUs></AboutUs>
    },
    {
      path: '/sign-up',
      element: <SignUp></SignUp>
    },
    {
      path: '/sign-in',
      element: <SignIn></SignIn>
    }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [{
      path: 'all-task',
      element: <PrivateRoutes><AllTask></AllTask></PrivateRoutes>
    },
    {
      path: 'edit-task',
      element: <PrivateRoutes><EditTask></EditTask></PrivateRoutes>
    },
    {
      path: 'overview',
      element: <PrivateRoutes><OverView></OverView></PrivateRoutes>
    },
    {
      path:'add-task',
      element:<PrivateRoutes><Form></Form></PrivateRoutes>
    },
    {
      path:'update-task/:id',
      element:<UpdateTask></UpdateTask>,
      loader:({params})=>fetch(`https://focus-task-server.vercel.app/update-task/${params.id}`)
    }
    ]
  }
]);
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthProvider>
  </QueryClientProvider>
)
