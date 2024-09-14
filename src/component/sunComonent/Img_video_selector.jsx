import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdPhotoLibrary } from "react-icons/md";
import { BiSolidVideos } from "react-icons/bi";
import { MyContext } from "../../context/All_context";


const Img_video_selector = ({setInputValue}) => {
    const [text, settext] = useState("photo");
    const [display, setdisplay] = useState("none");
    const [roll, setroll] = useState(0);
    //context 
    const {videoOrPhotoSearchState} = useContext(MyContext)
    // console.log(videoOrPhotoSearchState)
    return (
        <div
            className="relative bg-white text-black rounded-l-xl hover:rounded-none transition-all  py-3 text-center capitalize"
            onMouseEnter={() => {
                setdisplay(display === "block" ? "none" : "block")
                setroll(180)
            }}
            onMouseLeave={() => {
                setdisplay('none')
                setroll(0)
            }}
        >

            <p
                className="flex items-center gap-2 justify-center px-2  w-[20vmin] h-full text-[#00c421]"

            >
                <span className="text-[1.5rem]">{text==='photo'?<MdPhotoLibrary/>:<BiSolidVideos/>}</span>
                <span className="video-photo-text" id="">{text}{" "}</span>
                <span style={{ rotate: roll + 'deg' }} className="inline-block text-[1.5rem]">
                    <IoIosArrowDown />
                </span>{" "}
            </p>
            <div
                style={{ display: display }}
                className="absolute top-[-160%] left-0 bg-white rounded-t-md px-2  w-full pb-4 overflow-hidden"
            >
                <p
                    className="py-2 flex items-center justify-center gap-[2vmin] hover:bg-[#ececec] hover:text-[#00c421] cursor-pointer"
                    onClick={(e) =>{
                        settext("photo")
                        videoOrPhotoSearchState.setisPhotoSearch(true)
                        setInputValue('')
                    }}
                >
                  <span className="text-[1.5rem]"><MdPhotoLibrary/></span>  <span className="video-photo-text">photo</span> 
                </p>
                <p 
                    className="py-2 flex items-center justify-center gap-[2vmin] hover:bg-[#ececec] hover:text-[#00c421] cursor-pointer"
                    onClick={(e) =>{
                        settext("video")
                        videoOrPhotoSearchState.setisPhotoSearch(false)
                        setInputValue('')
                    }}
                >
                  <spa className="text-[1.5rem]"n><BiSolidVideos/></spa>  <span className="video-photo-text">video</span>
                </p>
            </div>
        </div>
    );
};

export default Img_video_selector;
