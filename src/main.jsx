import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import Contact from "./pages/contact/Contact.jsx"
import NotFound from './pages/notFoundPage/NotFound.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <Home/>,
  errorElement: <NotFound/>,
},
{
  path: '/contact',
  element: <Contact/>,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
