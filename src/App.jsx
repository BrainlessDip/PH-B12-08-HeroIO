import React from "react";
import { Outlet } from "react-router";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
    </>
  );
}

export default App;
