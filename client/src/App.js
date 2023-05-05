import React from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
])

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
