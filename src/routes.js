import React ,{Suspense , lazy} from 'react'
import {Route , Routes} from "react-router-dom"

export const renderRoutes   = (route) =>{

  <Suspense fallback={<>loading...</>}>
    <Routes>
      {route.map((eachRoute , index) => (
        <Route key={index} path={eachRoute.path} element={eachRoute.element}/>
      ))}
    </Routes>
  </Suspense>

}

const routes = [
  {
    Path:"/" , element:lazy(()=> import("./Pages/Main"))
  },{
    Path:"add" , element:lazy(()=> import("./Pages/AddTask"))
  },{
    Path:"/edite/:id" , element:lazy(()=> import("./Pages/EditeTask"))
  },{
    Path:"*" , element:<>Not Found!</>
  },
]

export default routes