import {BrowserRouter} from "react-router-dom"
import routes ,{ renderRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  );
}

export default App;
