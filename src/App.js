import {BrowserRouter} from "react-router-dom"
import routes ,{ renderRoutes } from "./routes";
import Layout from "./Layout/Layout";

function App() {
  return (
    
    <>
    <Layout>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Layout>
    </>
  );
}

export default App;
