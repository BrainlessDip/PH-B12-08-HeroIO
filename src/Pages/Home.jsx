import React from "react";
import Hero from "../Components/Hero";
import TrendingApps from "../Components/TrendingApps";
import { useLoaderData } from "react-router";

const Home = () => {
  const apps = useLoaderData().slice(0, 8);
  return (
    <>
      <Hero />
      <TrendingApps apps={apps} />
    </>
  );
};

export default Home;
