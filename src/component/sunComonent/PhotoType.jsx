import React, { useContext } from "react";
import { MyContext } from "../../context/All_context";
import Img_Video_Type from "./Img_Video_Type";

const PhotoType = ({targetBg, settargetBg, setBg1, setBg2, setBg3, typeText, icon}) => {
    const {typeState} = useContext(MyContext);
  return (
    <div
      style={{ background: targetBg }}
      className="rounded-full"
      onClick={(e) => {
        settargetBg(targetBg === "green" ? "white" : "green");
        setBg1(targetBg === "green" && "white");
        setBg2(targetBg === "green" && "white");
        setBg3(targetBg === "green" && "white");
        typeState.setphotoType(typeText);
      }}
    >
      <Img_Video_Type type={typeText} icon={icon} />
    </div>
  );
};

export default PhotoType;
