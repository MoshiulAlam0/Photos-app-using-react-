import React, { useContext } from "react";

import Img_video_selector from "./Img_video_selector";
import { CgSearch } from "react-icons/cg";
import { MyContext } from "../../context/All_context";

const Search = () => {
  const {searchState} = useContext(MyContext);
  console.log(searchState.setsearchValue)
  
  return (
    <div
      id="search-con"
      className="w-full text-white relative z-10 px-5"
    >
      <h1 className="text-center capitalize text-[3rem] font-semibold mb-4 px-3 leading-none">
        images and video collection
      </h1>
      <div className=" search-con  flex items-center justify-center w-[100%]  m-auto">
        <Img_video_selector />
        <input
          type="text"
          name=""
          id=""
          className="text-black px-[3vmin] py-3 w-[60%] focus:outline-none"
          placeholder="type your search ..."
        />
        <div
          id="search-btn"
          className="px-[5vmin] py-3 cursor-pointer bg-[#00c421] text-white font-extralight rounded-r-xl  transition-all hover:bg-[#4ec400] "
        >
          <span className="text-[1.5rem]"><CgSearch/></span>
        </div>
      </div>
    </div>
  );
};

export default Search;
