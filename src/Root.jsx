import React from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "./Components/NavBar";
import Loading from "./Components/Loading";

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <NavBar />
      {navigation.state === "loading" ? <Loading /> : <Outlet></Outlet>}
    </>
  );
}

export default Root;
