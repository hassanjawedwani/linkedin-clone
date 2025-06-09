import React from "react";
import { FaImage } from "react-icons/fa";
import { MdVideoCameraBack } from "react-icons/md";
import { PiArticleNyTimesFill } from "react-icons/pi";
import { FaRegThumbsUp } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";

const Main = () => {
  return (
    <div>
      <div className="p-3 shadow bg-white rounded-lg">
        <div className="flex gap-3">
          <img
            src="/images/user.svg"
            alt="user image"
            className="w-14 rounded-full"
          />
          <button className="border border-gray-400 w-full rounded-full text-start px-4 font-semibold text-black/60 hover:bg-black/5 cursor-pointer">
            Start a Post
          </button>
        </div>
        <div className="pt-5 pb-2 flex justify-evenly">
          <div className="flex gap-1.5 items-center ">
            <FaImage className="text-[#0a66c9]" size={24} />
            <span className="font-semibold text-black/60">Photo</span>
          </div>
          <div className="flex gap-1.5 items-center ">
            <MdVideoCameraBack className="text-green-700" size={24} />
            <span className="font-semibold text-black/60">Video</span>
          </div>
          <div className="flex gap-1.5 items-center ">
            <PiArticleNyTimesFill className="text-amber-800" size={24} />
            <span className="font-semibold text-black/60">Article</span>
          </div>
        </div>
      </div>
      <div className="mt-3 shadow bg-white rounded-lg flex flex-col gap-3">
        <div className="flex gap-3 p-3 pb-0">
          <img
            src="/images/user.svg"
            alt="user image"
            className="w-14 rounded-full h-14"
          />
          <div className="text-sm">
            <p className="font-bold">Username</p>
            <p className="text-black/60">Motherfucker Millionaire</p>
            <p className="text-black/60">Time ago . </p>
          </div>
        </div>
        <p className="text-sm px-3">
          A post description second line description third line description
        </p>
        <img
          src="https://images.unsplash.com/photo-1738680815806-a2f7350b558d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="post image"
          className=""
        />
        <div className="flex justify-between p-3 pt-1">
          <div className="flex ">
            <img
              src="/images/blue-like-button-icon.svg"
              alt="like icon"
              className="w-5"
            />
            <img
              src="/images/red-heart-icon.svg"
              alt="like icon"
              className="w-5"
            />
            <span className="ml-1">743</span>
          </div>
          <div>
            <span>7 comments</span>
          </div>
        </div>

        <div className="border-b border-b-gray-200 mx-3"></div>
        <div className="p-3 pt-0 grid grid-cols-4 text-sm">
          <button className="flex gap-1 items-center justify-center hover:bg-black/10 h-9 transition-all">
            <FaRegThumbsUp />
            Like
          </button>
          <button className="flex gap-1 items-center justify-center hover:bg-black/10 h-9 transition-all">
            <BiCommentDetail />
            Comment
          </button>
          <button className="flex gap-1 items-center justify-center hover:bg-black/10 h-9 transition-all">
            <BiRepost />
            Repost
          </button>
          <button className="flex gap-1 items-center justify-center hover:bg-black/10 h-9 transition-all">
            <BsFillSendFill />  
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
