import React from "react";

const Lodder = () => {
  return (
    <div className="flex items-baseline justify-center gap-[.1vmin] ">
      <span id="lodding-text"  className="text-[6vmin]">Lodding</span>
      <span className="lodderDot text-[#ff02ffaa] text-[10vmin] font-bold">.</span>
      <span className="lodderDot text-[#21bdec] text-[10vmin] font-bold">.</span>
      <span className="lodderDot text-[#2cfc36aa] text-[10vmin] font-bold">.</span>
    </div>
  );
};

export default Lodder;
