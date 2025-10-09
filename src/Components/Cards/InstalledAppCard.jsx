import React from "react";
import { CiStar } from "react-icons/ci";
import { FaDownload } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";

const InstalledAppCard = ({ app, handleUninstall }) => {
  return (
    <div className="p-4 bg-white flex flex-col md:flex-row justify-between items-start">
      <div className="flex gap-5 items-center justify-between ">
        <div>
          <img
            src={app.image}
            className="rounded-[4px] w-[80px] h-[80px]"
            alt=""
          />
        </div>
        <div>
          <h1>{app.title}</h1>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center justify-between">
              <FaDownload className="w-[16px] h-[16px]" />{" "}
              <p>{app.downloads}</p>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <CiStar className="w-[16px] h-[16px]" /> <p>{app.ratingAvg}</p>
            </div>
            <div className="flex gap-2 items-center justify-between">
              <MdOutlineRateReview className="w-[16px] h-[16px]" />{" "}
              <p>{app.size}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-end w-full sm:w-auto mt-4">
        <button
          onClick={() => handleUninstall(app.id)}
          className="bg-[#00d390] hover:bg-[#00b87d] text-white font-semibold px-6 py-2.5 rounded-md w-full sm:w-auto"
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default InstalledAppCard;
