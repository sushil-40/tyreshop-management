import "./App.css";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="wrapper">
      <h2 className="text-center m-2 p-3">Tyreshop Management Application</h2>
      <hr className="container" />

      <Login />
    </div>
  );
}

export default App;
