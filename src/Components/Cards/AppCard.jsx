import React from "react";
import { CiStar } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";

const AppCard = () => {
  return (
    <div className="rounded-[4px] p-4 bg-white shadow-md space-y-2 ">
      <img
        src="https://hero-apps.pages.dev/app-logo/icon-005.webp"
        className="rounded-[4px] w-full"
        alt=""
      />
      <h1 className="text-[20px] font-medium">
        Forest: Focus for Productivity
      </h1>
      <div className="flex justify-between items-start">
        <div className="bg-[#f1f5e8] text-[#00d390] py-1.5 px-2.5 rounded-[4px] flex items-center justify-between gap-1 font-medium">
          <FaDownload /> 9M
        </div>
        <div className="bg-[#f1f5e8] text-[#ff8811] py-1.5 px-2.5 rounded-[4px] flex items-center justify-between gap-1 font-medium">
          <CiStar /> 5
        </div>
      </div>
    </div>
  );
};

export default AppCard;
