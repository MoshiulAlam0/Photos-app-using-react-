import React, { useContext, useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import PropTypes from "prop-types";
import { MyContext } from "../context/All_context";
import Lodder from "./sunComonent/Lodder";

const MainPhotoCon = ({
  color,
  searchText,
  isPhotoFiend,
  imgType,
  pageSize,
  stockValueSet,
  searchOrder,
}) => {
  const [page, setpage] = useState(1);
  const myState = useContext(MyContext);
  const [isVideoRender, setisVideoRender] = useState(false);
  const [lodderDisplay, setlodderDisplay] = useState("block");
  const [errorDisplay, seterrorDisplay] = useState("none");

  // api data storage :
  const [mainApiData, setmainApiData] = useState({
    total: 0,
    totalHits: 0,
    hits: [],
  });

  // for fetch--> (function):
  async function data_Load() {
    try {
      setlodderDisplay("block"); /// show loder
      setmainApiData({
        total: 0,
        totalHits: 0,
        hits: [],
      });
      if (isPhotoFiend) {
        stockValueSet("Photos");
        console.log("i am in the photo lode");
        let keyCode = "45929705-2b07f79792d4b03a2400490cc";
        let url = `https://pixabay.com/api/?key=${keyCode}&q=${color}+${searchText}&image_type=${imgType}&per_page=${pageSize}&page=${page}&order=${searchOrder}`;
        let res = await fetch(url);
        let data = await res.json();
        setmainApiData(data);
        setisVideoRender(false);
      } else {
        stockValueSet("Videos");
        console.log("i am in the video lode");
        let keyCode = "45929705-2b07f79792d4b03a2400490cc";
        let url = `https://pixabay.com/api/videos/?key=${keyCode}&q={color}+${searchText}&per_page=${pageSize}&page=${page}&order=${searchOrder}`;
        let res = await fetch(url);
        let data = await res.json();
        setmainApiData(data);
        setisVideoRender(true);
      }
      setlodderDisplay("none");
      seterrorDisplay("none");
    } catch (error) {
      {
        setTimeout(() => {
          /// aftter 2sec hide loder
          setlodderDisplay("none");
          seterrorDisplay("block");
        }, 5000);
      }
      console.warn("error khaice ..");
    }
  }

  // data lode for one time
  useEffect(() => {
    data_Load();
  }, []);

  // data lode to depande on states
  useEffect(() => {
    data_Load();
  }, [page, searchText, searchOrder, isPhotoFiend]);

  // console.log(searchText);
  //  console.log(searchOrder);
  // console.log(isPhotoFiend)
  
  // render Element
  return (
    <div id="gallery-con" className="w-full px-8 pb-28 relative">
      {mainApiData.total !== 0 ? (
        mainApiData.hits.map((e, i) => {
          return !isVideoRender ? (
            <ImageCard
              key={i}
              userName={e.user}
              userImg={e.userImageURL}
              imgUrl={e.largeImageURL}
            />
          ) : (
            // console.log(e.userImageURL)
            <ImageCard
              key={i}
              userName={e.user}
              userImg={e.userImageURL}
              videoUrl={e.videos.large.url}
            />
          );
        })
      ) : (
        <h1
          style={{ display: errorDisplay }}
          className="text-center text-[#bababa] text-[5vmin] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        >
          Something is wrong . <br /> we are so sorry !!.
        </h1>
      )}
      <div
        style={{ display: lodderDisplay }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2"
      >
        <Lodder />
      </div>
      <div
        style={{ display: mainApiData.total !== 0 ? "block" : "none" }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 border-solid border-[#b4b4b41f] bg-[#f7f7f7] hover:bg-[#17ff7809] rounded-md border-[1px] text-center moreBtn capitalize text-[#bbba] hover:text-black transition-all cursor-pointer  tracking-[1vmin] text-[1.7rem] w-[96%] py-1"
        onClick={() => setpage(page + 1)}
      >
        see more
      </div>
    </div>
  );
};

export default MainPhotoCon;

MainPhotoCon.propTypes = {
  color: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
MainPhotoCon.defaultProps = {
  color: "colorfull",
  searchText: "wallpaper",
  imgType: "photo",
  pageSize: 50,
};
