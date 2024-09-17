import React, { useContext, useRef, useState } from "react";
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
  id,
  fromCollection,
}) => {
  // const { collectionState } = useContext(MyContext); // context

  const [isLike, setisLike] = useState(false);
  const [isDownlode, setisDownlode] = useState(false);

  const cardRef = useRef(null);

  /**downlode function*/
  const downlodeFile = async (url) => {
    setisDownlode(true);

    const parentDiv = cardRef.current;

    const pEle = document.createElement("p");
    pEle.classList.add("showDownlodeText");
    pEle.innerText = "Downlodding ...";
    parentDiv.appendChild(pEle);

    const res = await fetch(url);
    const blobObj = await res.blob();
    const downLlink = URL.createObjectURL(blobObj);

    const a = document.createElement("a");
    a.href = downLlink;
    a.download = "pixaFile";
    document.body.appendChild(a);

    a.click();
    a.target = "_blank";
    console.timeEnd();
    a.remove();

    pEle.remove();
    setisDownlode(false);
  };

  /* add collection function : */
  const addCollectionFunc = async (cardId) => {
    if (imgUrl) {
      let url = `https://pixabay.com/api/?key=45929705-2b07f79792d4b03a2400490cc&id=${id}`;
      const res = await fetch(url);
      const data = await res.json();
      addToLocalStorage("photoCollection", data.hits[0], "photosId", cardId);
    } else {
      let url = `https://pixabay.com/api/videos/?key=45929705-2b07f79792d4b03a2400490cc&id=${id}`;
      const res = await fetch(url);
      const data = await res.json();
      addToLocalStorage("videoCollection", data.hits[0], "videosId", cardId);
    }
  };
  /* set  data  to localstorage function  */
  function addToLocalStorage(key, value, idKey, cardId) {
    if (localStorage.getItem(key) && localStorage.getItem(idKey)) {
      // jodi data and id dui tai thake

      let storedCollections = JSON.parse(localStorage.getItem(key)); // get localstored data
      let storedIds = JSON.parse(localStorage.getItem(idKey)); // get localstored data

      if (!storedIds.includes(cardId)) {
        // jodi card ar id na thake the id set koro and data set kore

        let newData = [...storedCollections, value]; // set old data and new data
        localStorage.setItem(key, JSON.stringify(newData)); // set old data and new data

        let newIds = [...storedIds, cardId]; // set old data and new data
        localStorage.setItem(idKey, JSON.stringify(newIds)); // set old data and new data

        toast.success("added to you collection", {
          position: "top-center",
          autoClose: 1000,
        });
      } else {  // all ready jodi id thake
        toast.warn("all ready exeisted !", {
          position: "top-center",
          autoClose: 1000,
        });
      }
    } else {
      // jodi localstorage a ay nam a  kono key and value na thake the set koro
      localStorage.setItem(key, "[ ]");  
      localStorage.setItem(idKey, "[ ]");
    }
  }

  let defaultUserImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXc5yOGyKuHNVoGQWWLMiioYs2BG0eJurWhg&s";
  return (
    <div
      ref={cardRef}
      id="img_card"
      className="relative w-[100%] bg-[#f0f0f0] mb-[10px] rounded-lg overflow-hidden hover:cursor-zoom-in"
      target="_blank"
    >
      {imgUrl ? (
        <img
          onClick={() => {
            window.open(mainPageUrl, "_blank");
          }}
          src={imgUrl}
          alt=""
          className="w-full"
        />
      ) : (
        <div
          className="video"
          onClick={() => {
            window.open(mainPageUrl, "_blank");
          }}
        >
          <Video videoUrl={videoUrl} />
        </div>
      )}

      <div
        style={{ display: fromCollection ? "none" : "flex" }}
        className="img_content absolute top-2 flex  items-center justify-end gap-[4vmin] w-full text-[1.9rem] text-[#ffffffc9]  px-3"
      >
        <span
          style={{ color: isLike ? "red" : "white" }}
          className="cursor-pointer hover:text-white"
          onClick={() => {
            if (isLike) {
              setisLike(false);
            } else {
              setisLike(true);
            }
          }}
        >
          <FaRegHeart />
        </span>
        <span
          className="cursor-pointer hover:text-white"
          onClick={() => addCollectionFunc(id)}
        >
          <IoBagAddOutline />
        </span>
      </div>

      <div className="img_content absolute bottom-2 left-0 flex items-center justify-between w-full text-[#ffffffc9]  px-3">
        <div
          className="flex items-center gap-[1vmin] justify-between cursor-pointer"
          onClick={() => {
            window.open(mainPageUrl, "_blank");
          }}
        >
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
          style={{ display: isDownlode ? "none" : "inline-block" }}
        >
          <FiDownload />
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ImageCard;
