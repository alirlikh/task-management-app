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


routes = [
  {
    Path:"/" , element:<>home</>
  },{
    Path:"add" , element:<>add</>
  },{
    Path:"/edite/:id" , element:<>edite</>
  },{
    Path:"*" , element:<>Not Found!</>
  },
]

export default routes