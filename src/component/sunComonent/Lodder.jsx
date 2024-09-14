import React from "react";

const Lodder = () => {
  return (
    <div className="flex items-baseline justify-center gap-[.3vmin] ">
      <span id="lodding-text"  className="text-[6vmin] pr-1">Lodding</span>
      <span className="lodderDot text-[#ff02ffaa] text-[14vmin] font-bold">.</span>
      <span className="lodderDot text-[#21bdec] text-[13vmin] font-bold">.</span>
      <span className="lodderDot text-[#2cfc36aa] text-[12vmin] font-bold">.</span>
    </div>
  );
};

export default Lodder;
