import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Topbar from "./components/Topbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";

function App() {
  return (
    <div>
      <Topbar />
      <Profile />
      <Footer />
      <ChatBox />
    </div>
  );
}

export default App;
