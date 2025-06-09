import React from "react";

const LeftSide = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow  flex flex-col items-center gap-1 relative overflow-auto">
        <img
          src="/images/card-bg.svg"
          alt="card background"
          className="-mb-14 "
        />

        <div className="bg-white w-24 h-24 flex justify-center items-center rounded-full   ">
          <img src="/images/photo.svg" alt="user image" className=" " />
        </div>

        <h1 className="text-xl font-semibold text-[#000000e6]">
          Welcome Hassan Jawed!
        </h1>
        <p className="text-sm text-[#0a66cb] font-semibold">Add a photo</p>
        <div className="border-b-1 border-b-gray-200 w-full my-2"></div>
        <div className="flex justify-between w-full px-5">
          <div className="font-semibold">
            <p className="text-gray-500">Connections</p>
            <p>Grow your network</p>
          </div>
          <img src="/images/widget-icon.svg" alt="plus icon" className="w-6" />
        </div>
        <div className="border-b-1 border-b-gray-200 w-full my-2"></div>
        <div className="w-full px-5 pb-2 flex gap-1 items-center">
          <img src="/images/item-icon.svg" alt="bookmark icon" />
          <p className="font-semibold text-start">My Items</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow  relative overflow-auto mt-3 ">
        <div className="p-5 pb-2 flex flex-col gap-1">
          <p className="font-semibold text-start">Groups</p>
          <div className="flex justify-between w-full">
            <div className="font-semibold">
              <p>Events</p>
            </div>
            <img src="/images/plus-icon.svg" alt="plus icon" className="w-6" />
          </div>
          <p className="font-semibold text-start">Follow Hashtags</p>
        </div>

        <div className="border-b-1 border-b-gray-200 w-full"></div>
        <div className="font-semibold text-start hover:bg-black/10 text-gray-500 p-5">
          Discover More
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
