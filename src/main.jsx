import React from 'react'                   // lignes 1 & 2 équivalentes à importation par CDN
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App'
import './index.css'
import { Show } from './Show'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/show/:id",
    element: <Show />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)