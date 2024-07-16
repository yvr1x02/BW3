import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
/* import { Provider } from "react-redux"; */
import "./App.css";
import TopBar from "./components/TopBar"
import { BrowserRouter} from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <TopBar/>
    </BrowserRouter>
  );
}

export default App;
