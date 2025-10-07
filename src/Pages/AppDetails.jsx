import React from "react";
import { useLoaderData, useParams } from "react-router";
import AppCard from "./../Components/Cards/AppCard";

const AppDetails = () => {
  const apps = useLoaderData();
  const { id: appId } = useParams();
  const app = apps.find((app) => app.id === parseInt(appId));
  return (
    <>
      <h1>{app.title}</h1>
    </>
  );
};

export default AppDetails;
