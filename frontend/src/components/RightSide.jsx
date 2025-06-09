import React from "react";

const RightSide = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow p-5">
        <div className="flex justify-between">
          <p className="font-bold text-black/60 text-lg">Add to your feed</p>
          <img src="images/feed-icon.svg" alt="info icon" />
        </div>
        <div className="my-5">
          <div className="flex gap-4 items-center">
            <img
              src="/images/hashtag.svg"
              alt="hashtag-icon"
              className="w-16 border-4 border-gray-300 rounded-full p-4"
            />
            <div className="">
              <p className="text-black/70 font-semibold pl-3"># Linkedin</p>
              <button className="border border-gray-300 h-12 font-bold text-black/60 rounded-full w-28">
                Follow
              </button>
            </div>
          </div>

          <div className="flex gap-4 items-center mt-5">
            <img
              src="/images/hashtag.svg"
              alt="hashtag-icon"
              className="w-16 border-4 border-gray-300 rounded-full p-4"
            />
            <div className="">
              <p className="text-black/70 font-semibold pl-3"># Linkedin</p>
              <button className="border border-gray-300 h-12 font-bold text-black/60 rounded-full w-28">
                Follow
              </button>
            </div>
          </div>          
        </div>
        <p className="text-[#0a66cb] flex  gap-3 font-bold">View all recommendations <img src="images/right-icon.svg" alt="right arrow" /></p>
      </div>
    </div>
  );
};

export default RightSide;
