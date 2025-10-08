import React from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "./Components/NavBar";
import Loading from "./Components/Loading";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";

function Root() {
  const navigation = useNavigation();
  return (
    <>
      <NavBar />
      {navigation.state === "loading" ? <Loading /> : <Outlet></Outlet>}
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Root;
