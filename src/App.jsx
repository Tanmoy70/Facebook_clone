import "./App.css";
import Feed from "./components/feed/Feed";
import Leftbar from "./components/leftbar/Leftbar";
import Rightbar from "./components/rightbar/Rightbar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <div className="AppContainer">
        <Leftbar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}

export default App;
