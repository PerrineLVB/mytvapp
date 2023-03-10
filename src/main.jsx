import React from 'react'                   // lignes 1 & 2 √©quivalentes √† importation par CDN
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import App from './App'
import { Actor } from './components/Actor'
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
  },
  {
    path: "/actor/:id",
    element : <Actor />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)