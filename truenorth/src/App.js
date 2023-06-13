import "./App.css";

import Login from "./Login";
import Login2 from "./components/Login2";

import Navbar from "./components/Navbar";

const dbConnect = require("./db/dbConnect");
dbConnect();

function App() {
  //require database connection

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
