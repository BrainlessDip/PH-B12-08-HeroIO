import React from "react";
import { useParams } from "react-router";

const Apps = () => {
  const para = useParams();
  console.log(para);

  return <div>hi</div>;
};

export default Apps;
