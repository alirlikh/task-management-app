import { BrowserRouter } from "react-router-dom"
import routes, { renderRoutes } from "./routes"
import Layout from "./Layout/Layout"
import store from "./Store/store"
import { Provider } from "react-redux"

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>{renderRoutes(routes)}</Layout>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
