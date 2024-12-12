import { useState } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const onSwitchToSignUp = () => {
    setShowSignUp(true);
  };

  const onSwitchToLogin = () => {
    setShowSignUp(false); // Hide SignUp form from the right container
  };
  return (
    <div className="wrapper  m-2">
      <h2 className="text-center m-2 p-3 title font-effect-shadow-multiple">
        Tyreshop Management Application
      </h2>
      <hr className="hr-line m-2" />
      <div className="homepage-container m-2 ">
        <div className="left-container w-50 mt-5">
          <div className="login">
            <Login onSwitchToSignUp={onSwitchToSignUp} />
          </div>
        </div>
        <div className="right-container w-50">
          {showSignUp ? <SignUp onSwitchToLogin={onSwitchToLogin} /> : null}
        </div>
      </div>
      <footer className="footer-section  m-2">
        &copy; 2024 Copyright all reserved || Sushil Dangoriya
      </footer>
    </div>
  );
}

export default App;
