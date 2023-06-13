import "./App.css";

import Login from "./Login";

import Navbar from "./components/Navbar";

function App() {
  //require database connection

  //execute database connection
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}

export default App;
