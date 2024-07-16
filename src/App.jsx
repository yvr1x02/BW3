import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Topbar from "./components/Topbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";
import FormExp from "./components/Form";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
      <Route path="/Form" element={<FormExp/>}/>
      <Route path="/ProfilePage" element={<Profile/>}/>
      </Routes>
      <Footer />
      <ChatBox />

      
    </BrowserRouter>
  );
}

export default App;
