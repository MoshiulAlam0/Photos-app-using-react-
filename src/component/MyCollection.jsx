import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CollectionCon from "./collectionCon";
import { MyContext } from "../context/All_context";

const MyCollection = () => {
  const { collectionState } = useContext(MyContext);
  const [collectionData, setcollectionData] = useState([]);
  const [text, settext] = useState("photo");
  const [display, setdisplay] = useState("none");
  // get collection data from the localStorage
  function dataLoad() {
    if (text === "photo") {
      let storageData = JSON.parse(localStorage.getItem("photoCollection"));
      console.log(storageData);
      console.log("photo");
    } else {
      let storageData = JSON.parse(localStorage.getItem("videoCollection"));
      console.log(storageData);
      console.log("video");
    }
  }
  useEffect(() => {
    dataLoad();
  }, [collectionState.myCollection]);
  return (
    <div className="p-10 mt-16">
      <div className="flex items-center justify-between gap-8 flex-wrap">
        <h1 className="text-[3rem] font-extralight">MY Collection :</h1>
        <div
          className="relative text-white "
          onMouseEnter={() => setdisplay("block")}
          onMouseLeave={() => setdisplay("none")}
        >
          <button className="px-4 py-1 bg-[#11ac0c] capitalize">{text}</button>
          <div
            style={{ display: display }}
            className="absolute -top-[150%] left-0 bg-[#bababa] text-center "
          >
            <button
              onClick={(e) => settext(e.target.textContent)}
              className="capitalize hover:bg-[#1f5723] w-full"
            >
              photo
            </button>
            <button
              onClick={(e) => settext(e.target.textContent)}
              className="capitalize hover:bg-[#1f5723] w-full"
            >
              video
            </button>
          </div>
        </div>
      </div>
      <div key={"my-collection-main"} className="">
        <Routes>
          <Route path="/" element={<CollectionCon data={text} />} />
        </Routes>
        {/* <CollectionCon data={'photo'}/> */}
        it will be built a container for showing my collection.
      </div>
    </div>
  );
};

export default MyCollection;
