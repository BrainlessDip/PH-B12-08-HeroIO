import React from "react";
import NavBar from "../Components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <NavBar />
      <Outlet></Outlet>
    </>
  );
}

export default App;
