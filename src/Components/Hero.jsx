import React from "react";
import StoreButton from "./StoreButton";
import States from "./States";

const Hero = () => {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="inter max-w-[1440px] mx-auto text-center pt-20 flex justify-between items-center flex-col">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold">We Build</h1> <br />
            <h1 className="text-3xl md:text-7xl font-bold">
              <span className="text-[#632EE3]">Productive </span> Apps
            </h1>
          </div>

          <div>
            <p className="text-[#627382] text-[20px] font-normal mt-4 opacity-70">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
          </div>
          <div className="my-10 flex gap-4">
            <StoreButton
              logo={"/playstore.png"}
              url={"https://play.google.com/store/apps?hl=en"}
              name={"Google Play"}
            ></StoreButton>
            <StoreButton
              logo={"/appstore.png"}
              url={"https://www.apple.com/app-store"}
              name={"App Store"}
            ></StoreButton>
          </div>
          <div>
            <img src="/hero.png" alt="" />
          </div>
        </div>
      </div>
      <States />
    </>
  );
};

export default Hero;
