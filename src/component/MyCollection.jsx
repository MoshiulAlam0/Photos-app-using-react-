import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import CollectionCon from "./CollectionCon";

const MyCollection = () => {
  const [text, settext] = useState("photo");
  const [photos, setphotos] = useState([]);
  const [videos, setvideos] = useState([]);


  /* for get localstorage data :  */
 function getData(type) {
    if (type === "photo") {
      const data =  JSON.parse(localStorage.getItem("photoCollection"));
      setphotos(data)
    }else{
      const data = JSON.parse(localStorage.getItem("videoCollection"));
      setvideos(data)
    }
  }
  useEffect(() => {
    getData("photo");
  }, []);

  return (
    <div className="p-10 mt-16">
      <div className="flex items-center justify-between gap-8 flex-wrap">
        <h1 className="text-[3rem] font-extralight">MY Collection :</h1>
        <div id="collection-main-btn-con" className="relative text-white ">
          <button className="px-4 py-1 bg-[#11ac0c] capitalize">{text}</button>
          <div
            id="collection-btn-con"
            className="absolute -top-[150%] left-0 bg-[#bababa] text-center "
          >
            <button
              onClick={(e) => {
                settext(e.target.textContent)
                getData('photo')
              }}
              className="capitalize hover:bg-[#1f5723] w-full"
            >
              photo
            </button>
            <button
              onClick={(e) => {
                settext(e.target.textContent)
                getData('video')
              }}
              className="capitalize hover:bg-[#1f5723] w-full"
            >
              video
            </button>
          </div>
        </div>
      </div>
      <div className="">
        {text === 'photo' ? (
          <CollectionCon data={photos}/>
        ):(
          <CollectionCon data={videos}/>
        )}
      </div>
    </div>
  );
};

export default MyCollection;
