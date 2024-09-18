import { BrowserRouter } from "react-router-dom"
import routes, { renderRoutes } from "./routes"
import Layout from "./Layout/Layout"
import store from "./Store/store"
import { Provider } from "react-redux"

function App() {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Layout>
      </Provider>
    </>
  )
}

export default App
