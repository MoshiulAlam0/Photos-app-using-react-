import React, { useContext, useRef, useState } from "react";
import { MdDoneAll } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { BsVectorPen } from "react-icons/bs";

import { IoIosCheckmark } from "react-icons/io"; //chack mark
import { MyContext } from "../context/All_context";

const Setting = ({ stockValue }) => {
  //context
  const {orderState } = useContext(MyContext);

  const [text, settext] = useState("latest");
  const [display, setdisplay] = useState("none");
  const [activeBg, setactiveBg] = useState("#bababa27");
  const itemConRef = useRef(null);
  let obj = {
    all: <MdDoneAll />,
    photo: <MdInsertPhoto />,
    illustration: <FaPencil />,
    vector: <BsVectorPen />,
  };
  let filter = ["all", "photo", "illustration", "vector"];
  return (
    <div id="setting" className="p-8 ">
      <div
        ref={itemConRef}
        className="flex items-center justify-center gap-[3vmin] capitalize flex-wrap"
      >
        {filter.map((e, i) => {
          return (
            <p
              // onClick={(item) =>{
              //   setactiveBg(activeBg==='#bababa27'?'#00c4214b':'#bababa27')
              //   // console.log(itemConRef.current.chilldren[i].style.backgroundColor = bg)
              //   console.log(itemConRef.current.children[i].style.backgroundColor = activeBg)
              // } }
              className={`px-3 py-1 transition-all font-extralight hover:bg-[#00c4214b] cursor-pointer rounded-full bg-[#bababa27] text-[1.2rem] flex items-center justify-center gap-2`}
              key={i}
            >
              <span>{obj[e]}</span>
              <span className="">{e}</span>
            </p>
          );
        })}
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
