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
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Form from './Components/Form/Form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UpdateTask from './Components/UpdateTask/UpdateTask';


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
      path: 'to-dos',
      element: <PrivateRoutes><ToDos></ToDos></PrivateRoutes>
    },
    {
      path: 'on-going',
      element: <PrivateRoutes><OnGoing></OnGoing></PrivateRoutes>
    },
    {
      path: 'completed',
      element: <PrivateRoutes><Completed></Completed></PrivateRoutes>
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
      loader:({params})=>fetch(`http://localhost:5000/update-task/${params.id}`)
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
