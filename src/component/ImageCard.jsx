import React from "react";
import { FaRegHeart } from "react-icons/fa";

import { IoBagAddOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

const ImageCard = ({ userImg, imgUrl }) => {
  return (
    <div className="relative bg-red-400 w-full h-fit ">
      <img src={imgUrl} alt="" className="" />
      <div className="absolute top-2 flex items-center justify-end gap-[4vmin] w-full text-[1.9rem] text-[#ffffffc9]  px-3">
        <span className="cursor-pointer hover:text-white">
          <FaRegHeart />
        </span>
        <span className="cursor-pointer hover:text-white">
          <IoBagAddOutline />
        </span>
      </div>

      <div className="absolute bottom-2 left-0 flex items-center justify-between w-full text-[#ffffffc9]  px-3">
        <div className="flex items-center gap-[1vmin] justify-between cursor-pointer">
          <img
            src={userImg}
            className="rounded-full w-[6vmin] aspect-[1/1]"
            alt=""
          />
          <p className="text-[.9rem] ">alex zendra. </p>
        </div>
        <p className="text-[1.9rem] hover:text-white  cursor-pointer">
          <FiDownload />
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
