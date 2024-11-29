import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { 
  createBrowserRouter, 
  Routes, 
  Route ,
  createRoutesFromElements,
  RouterProvider,
 } from "react-router";
import App from './App';
 const router = createBrowserRouter(
  createRoutesFromElements(
    
        <Route path="/" element={<App />} >
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        </Route>
     
  )
 );



ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
