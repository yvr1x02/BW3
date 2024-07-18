import Chatbox from "../components/ChatBox";
import Notizie from "../components/Notizie";
import Topbar from "../components/TopBar";
function HomePage() {
  return (
    <>
      <Topbar />
      <Notizie />
      <Chatbox />
    </>
  );
}

export default HomePage;
