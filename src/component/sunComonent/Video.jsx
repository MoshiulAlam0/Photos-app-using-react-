import React, { useRef, useState } from "react";
import { GoPlay } from "react-icons/go";

const Video = ({ videoUrl }) => {
  const [playBtnDisplay, setplayBtnDisplay] = useState("block");
  const videoRef = useRef(null);
  return (
    <div
      className="relative"
      onMouseOver={() => {
        setplayBtnDisplay("none");
        videoRef.current.play()
      }}
      onMouseOut={() => {
        setplayBtnDisplay("block");
        videoRef.current.pause()
      }}
    >
      <video ref={videoRef} src={videoUrl} loop muted></video>
      <div
        style={{ display: playBtnDisplay }}
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[2.3rem] text-white"
      >
        <GoPlay />
      </div>
    </div>
  );
};

export default Video;
