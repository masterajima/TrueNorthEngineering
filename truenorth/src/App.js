import "./App.css";

import Login from "./Login";
import Login2 from "./components/Login2";

import Navbar from "./components/Navbar";

function App() {
  //require database connection
  const dbConnect = require("./db/dbConnect");

  //execute database connection
  return (
    <>
      <Navbar />
      <Login />
      <Login2></Login2>
    </>
  );
}

export default App;
