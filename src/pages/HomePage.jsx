import Chatbox from "../components/ChatBox";
import Notizie from "../components/Notizie";
import TopBar from "../components/TopBar";
function HomePage() {
  return (
    <>
      <TopBar />
      <Notizie />
      <Chatbox />
    </>
  );
}

export default HomePage;
