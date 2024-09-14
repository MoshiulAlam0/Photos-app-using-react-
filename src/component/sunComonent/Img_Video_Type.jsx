import React from "react";

const Img_Video_Type = ({type, icon}) => {
  return (
    <div
      className={`px-3 py-1 transition-all font-extralight hover:bg-[#00c4214b] cursor-pointer rounded-full  text-[1.2rem] flex items-center justify-center gap-2`}
    >
      <span>{type}</span>
      <span className="">{icon}</span>
    </div>
  );
};

export default Img_Video_Type;
