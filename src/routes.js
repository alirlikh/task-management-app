import React, { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"

export const renderRoutes = (route) => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        {route.map((eachRoute, index) => (
          <Route key={index} path={eachRoute.path} element={eachRoute.element} />
        ))}
      </Routes>
    </Suspense>
  )
}

const Main = lazy(() => import("./Pages/Main"))
const AddTask = lazy(() => import("./Pages/AddTask"))
const EditeTask = lazy(() => import("./Pages/EditeTask"))

const routes = [
  {
    path: "/",
    element: <Main />
  },
  {
    path: "/create",
    element: <AddTask />
  },
  {
    path: "/edite/:id",
    element: <EditeTask />
  },
  {
    path: "*",
    element: <>Not Found!</>
  }
]

export default routes
