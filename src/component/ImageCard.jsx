import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

import { IoBagAddOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import Video from "./sunComonent/Video";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageCard = ({
  userImg,
  imgUrl,
  userName,
  videoUrl,
  mainPageUrl,
  downlodeUrl,
}) => {
  // const [videoPlay, setvideoPlay] = useState();
  const downlodeFile = async (url) => {
    toast('downloded.!',{
      position: "top-center",
      autoClose: 2000,
    });
    const res = await fetch(url);
    const blobObj = await res.blob();
    const downLlink = URL.createObjectURL(blobObj);
    const a = document.createElement("a");
    a.href = downLlink;
    a.download = "pixa";
    console.log(a);
    document.body.appendChild(a);
    a.click();
    a.target ='_blank'
    a.remove;
    toast.success('downloded.!',{
      position: "top-center",
      autoClose: 2000,
    });
  };
  let defaultUserImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXc5yOGyKuHNVoGQWWLMiioYs2BG0eJurWhg&s";
  return (
    <div
      id="img_card"
      className="relative w-[100%] bg-[#f0f0f0] mb-[10px] rounded-lg overflow-hidden hover:cursor-zoom-in"
      target="_blank"
      onClick={()=>{
        // window.open(mainPageUrl, '_blank')
      }}
    >
      {imgUrl ? (
        <img src={imgUrl} alt="" className="w-full" />
      ) : (
        <Video videoUrl={videoUrl} />
      )}

      <div className="img_content absolute top-2 flex  items-center justify-end gap-[4vmin] w-full text-[1.9rem] text-[#ffffffc9]  px-3">
        <span className="cursor-pointer hover:text-white">
          <FaRegHeart />
        </span>
        <span className="cursor-pointer hover:text-white">
          <IoBagAddOutline />
        </span>
      </div>


      <div className="img_content absolute bottom-2 left-0 flex items-center justify-between w-full text-[#ffffffc9]  px-3">
        <div className="flex items-center gap-[1vmin] justify-between cursor-pointer">
          <img
            src={userImg ? userImg : defaultUserImg}
            className="rounded-full w-[6vmin] aspect-[1/1]"
            alt=""
          />
          <p className="text-[.9rem] ">{userName}</p>
        </div>
        <p
          onClick={() => downlodeFile(downlodeUrl)}
          className="text-[1.9rem] hover:text-white  cursor-pointer"
        >
          <FiDownload />
        </p>
      </div>
      <ToastContainer
      position="top-center"
      autoClose={2000}/>
    </div>
  );
};

export default ImageCard;
