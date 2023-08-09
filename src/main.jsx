import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Skills from './Components/Skills.jsx'
import {BrowserRouter as Router, Route, Navigate} from 'react-router-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
  path: "Skills",
   element: <Skills />,
    
  },
  
  {
    path:"Contact",
    element: <Contact/>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
