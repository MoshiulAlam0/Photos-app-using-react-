import React, { useContext, useRef, useState } from "react";
import { MdDoneAll } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { BsVectorPen } from "react-icons/bs";

import { IoIosCheckmark } from "react-icons/io"; //chack mark
import { MyContext } from "../context/All_context"; // context
// import Img_Video_Type from "./sunComonent/Img_Video_Type";
import PhotoType from "./sunComonent/PhotoType";
import VideoType from "./sunComonent/VideoType";

const Setting = ({ stockValue }) => {
  //context
  const { videoOrPhotoSearchState, orderState, typeState } =
    useContext(MyContext);

  const [text, settext] = useState("popular");
  const [display, setdisplay] = useState("none");
//  for photo 
  const [activeBg1, setactiveBg1] = useState("white"); 
  const [activeBg2, setactiveBg2] = useState("green");
  const [activeBg3, setactiveBg3] = useState("white");
  const [activeBg4, setactiveBg4] = useState("white");
  // for video 
  const [activeBg5, setactiveBg5] = useState("white"); 
  const [activeBg6, setactiveBg6] = useState("green");
  const [activeBg7, setactiveBg7] = useState("white");

  const itemConRef = useRef(null);
  let obj = {
    all: <MdDoneAll />,
    photo: <MdInsertPhoto />,
    illustration: <FaPencil />,
    vector: <BsVectorPen />,
  };
  return (
    <div id="setting" className="p-8 ">
      {/* type for photo  */}
      <div
        style={{
          display: videoOrPhotoSearchState.isPhotoSearch ? "flex" : "none",
        }}
        ref={itemConRef}
        className="flex items-center justify-center gap-[3vmin] capitalize flex-wrap"
      >
        <PhotoType
          targetBg={activeBg1}
          settargetBg={setactiveBg1}
          setBg1={setactiveBg2}
          setBg2={setactiveBg3}
          setBg3={setactiveBg3}
          typeText={"all"}
          icon={obj.all}
        />
        <PhotoType
          targetBg={activeBg2}
          settargetBg={setactiveBg2}
          setBg1={setactiveBg1}
          setBg2={setactiveBg3}
          setBg3={setactiveBg4}
          typeText={"photo"}
          icon={obj.photo}
        />
        <PhotoType
          targetBg={activeBg3}
          settargetBg={setactiveBg3}
          setBg1={setactiveBg1}
          setBg2={setactiveBg2}
          setBg3={setactiveBg4}
          typeText={"illustration"}
          icon={obj.illustration}
        />
        <PhotoType
          targetBg={activeBg4}
          settargetBg={setactiveBg4}
          setBg1={setactiveBg1}
          setBg2={setactiveBg2}
          setBg3={setactiveBg3}
          typeText={"vector"}
          icon={obj.vector}
        />
      </div>
      {/* type for video  */}
      <div
        className="flex items-center justify-center gap-[3vmin] capitalize flex-wrap"
        style={{
          display: !videoOrPhotoSearchState.isPhotoSearch ? "flex" : "none",
        }}
      >
        <VideoType
          targetBg={activeBg5}
          settargetBg={setactiveBg5}
          setBg1={setactiveBg6}
          setBg2={setactiveBg7}
          typeText={"all"}
          icon={obj.all}
        />
        <VideoType
          targetBg={activeBg6}
          settargetBg={setactiveBg6}
          setBg1={setactiveBg5}
          setBg2={setactiveBg7}
          typeText={"flim"}
          icon={obj.all}
        />
        <VideoType
          targetBg={activeBg7}
          settargetBg={setactiveBg7}
          setBg1={setactiveBg5}
          setBg2={setactiveBg6}
          typeText={"animation"}
          icon={obj.all}
        />
      </div>
      <div className="flex items-center justify-between mt-14">
        <h1 className="text-[2rem] font-medium leading-none">
          Free Stock {stockValue}
        </h1>
        <div
          className="relative py-2 border-[1px] w-[100px] capitalize text-center font-extralight rounded-xl hover:rounded-none transition-all"
          onMouseEnter={() => setdisplay("block")}
          onMouseLeave={() => setdisplay("none")}
        >
          <p
            // onClick={() => setdisplay(display === "block" ? "none" : "block")}
            className="text-[1.2rem]"
            href="/"
          >
            {text}
          </p>
          <div
            style={{ display: display }}
            className="absolute top-[-168%] bg-[#00c421] text-white left-0 w-full text-[1.2rem]"
          >
            <p
              onClick={(e) => {
                settext(text === "latest" ? "popular" : "latest");
                orderState.setorder(e.target.innerText.toLowerCase());
              }}
              className="flex items-center justify-center gap-1 cursor-pointer hover:bg-[#40d832] py-1"
            >
              <span>{text === "latest" && <IoIosCheckmark />}</span>
              <span>latest</span>{" "}
            </p>
            <p
              onClick={(e) => {
                settext(text === "latest" ? "popular" : "latest");
                orderState.setorder(e.target.innerText.toLowerCase());
              }}
              className="flex items-center justify-center gap-1 cursor-pointer  hover:bg-[#40d832] py-1 "
            >
              <span>{text === "popular" && <IoIosCheckmark />}</span>
              <span>popular</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
