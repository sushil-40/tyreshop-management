import "./App.css";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="wrapper">
      <h2 className="text-center m-2 p-3 title font-effect-shadow-multiple">
        Tyreshop Management{" "}
        {/* <span className="word-effect">
          <span>M</span>
          <span>a</span>
          <span>n</span>
          <span>a</span>
          <span>g</span>
          <span>e</span>
          <span>m</span>
          <span>e</span>
          <span>n</span>
          <span>t</span>
        </span> */}
        Application
      </h2>
      <hr className="hr-line m-2" />
      <div className="homepage-container m-2 ">
        <div className="left-container w-50">
          <div className="login">
            <Login />
          </div>
        </div>
        <div className="right-container w-50">
          {/* <div className="bouncing-tyre"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
