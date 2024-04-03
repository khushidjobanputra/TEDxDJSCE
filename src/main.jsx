import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import About from './pages/About.jsx'
import Collaborate from './pages/Collaborate.jsx'
import Home from './Home/Home.jsx'
import Events from './pages/events.jsx'
import Gallery from './Components/Gallery.jsx'

const router = createBrowserRouter([
  {
    path:'/' , 
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>

      },
      {
        path:"collaborate",
        element:<Collaborate/>
      },
      {
        path:"events",
        element:<Events />
      },
      {
        path:"gallery",
        element:<Gallery />
      },
      // {
      //   path:"events",
      //   element:<Events/>

      // },
      // {
      //   path:"team",
      //   element:<Teams/>
      // }
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


