import React from 'react';
import {useRoutes } from 'react-router-dom';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Post from './features/posts/pages/Post';
import Createpost from './features/posts/pages/Createpost';


export default function Routes() {
  return useRoutes([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path:'/',
      element:<Post />   
     },
     {
       path:'/createpost',
       element:<Createpost />
     }
  ]);
}