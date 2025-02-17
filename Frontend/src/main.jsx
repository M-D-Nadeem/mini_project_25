import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auth from './pages/Auth.jsx'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:
    <>
    <Auth />
    <Toaster />
    </>
  },
  {
    path:"/page",
    element:
    <>
    <App />
    <Toaster />
    </>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)