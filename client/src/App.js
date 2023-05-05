import React, { Children } from "react"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Home from "./pages/Home"

const Layout = () => {
  return (
    <>
      <Outlet />
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
