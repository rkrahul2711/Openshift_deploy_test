import React, { Suspense } from "react"
import Authentication from "components/Authentication/login"
import { Navigate,  } from "react-router-dom"

const Dashboard = React.lazy(() => import("../components/Home/Dashboard/Dashboard"))


const authProtectedRoutes = [
  {
    path: "/dashboard",
    element: (
      <React.Suspense fallback={null}>
        <Dashboard />
      </React.Suspense>
    ),
    breadcrumb: {
      label: "Service Command Center",
    },
  },
  {
    path: "/",
    element: <Navigate to="/service" replace />,
    exact: true,
  },
  {
    path: "*",
    element: <Navigate to="/service" replace />,
    exact: true,
  },
]

const publicRoutes = [
  {
    path: "/",
    element: <Authentication />,
  },
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "*",
    element: <Authentication />,
  },
]

export { publicRoutes, authProtectedRoutes }
