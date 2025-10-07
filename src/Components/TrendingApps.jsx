import React from "react";
import AppCard from "./Cards/AppCard";

const TrendingApps = () => {
  return (
    <div className="p-20 inter bg-[#f5f5f5]">
      <h1 className="text-5xl font-bold text-center mb-5">Trending Apps</h1>
      <p className="text-[15px] font-bold text-center text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="max-w-[1440px] mx-auto grid grid-cols-4 gap-4 mt-10">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </div>
  );
};

export default TrendingApps;
