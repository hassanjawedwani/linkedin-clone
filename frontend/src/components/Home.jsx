import React from "react";
import LeftSide from "./LeftSide";
import Main from "./Main";
import RightSide from "./RightSide";

const Home = () => {
  return (
    <div className=" max-w-7xl mx-auto px-4 pb-20">
      <div className="flex flex-col md:flex-row justify-center items-center py-5 underline text-center px-4">
        <h5 className="text-[#0a66cb] font-bold">Hiring in a Hurry? &nbsp;</h5>
        <p className="text-[#434649] font-semibold">
          {" "}
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)] lg:grid-cols-[minmax(0,_1fr)_minmax(0,_2fr)_minmax(0,_1fr)] gap-5 mx-auto pt-1">
        <LeftSide />
        <Main />
        <RightSide />
      </div>
    </div>
  );
};

export default Home;
