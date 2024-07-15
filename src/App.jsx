import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; */
/* import { Provider } from "react-redux"; */
import "./App.css";
import TopBar from "./components/TopBar";
import ContentProfile from "./components/ContentProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
    <TopBar />
    {/* <Routes>
      <Route path="/" element={} />
    </Routes> */}
    
    </BrowserRouter>
  );
}

export default App;
