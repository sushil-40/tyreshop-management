import "./App.css";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="wrapper ">
      <h2 className="text-center m-2 p-3 title font-effect-shadow-multiple">
        Tyreshop Management Application
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
      <footer className="footer-section  m-2">
        &copy; 2024 Copyright all reserved || Sushil Dangoriya
      </footer>
    </div>
  );
}

export default App;
