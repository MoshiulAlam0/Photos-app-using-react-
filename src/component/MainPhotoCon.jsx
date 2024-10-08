import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import PropTypes from "prop-types";
import Lodder from "./sunComonent/Lodder";

const MainPhotoCon = ({
  color,
  searchText,
  isPhotoFiend,
  photoTypeValue,
  videoTypeVlaue,
  pageSize,
  stockValueSet,
  searchOrder,
}) => {
  const [page, setpage] = useState(1);
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
        // console.log("i am in the photo lode");
        let keyCode = "45929705-2b07f79792d4b03a2400490cc";
        let url = `https://pixabay.com/api/?key=${keyCode}&q=${color}+${searchText}&image_type=${photoTypeValue}&per_page=${pageSize}&page=${page}&order=${searchOrder}`;
        let res = await fetch(url);
        let data = await res.json();
        setmainApiData(data);
        setisVideoRender(false);
      } else {
        stockValueSet("Videos");
        // console.log("i am in the video lode");
        let keyCode = "45929705-2b07f79792d4b03a2400490cc";
        let url = `https://pixabay.com/api/videos/?key=${keyCode}&q={color}+${searchText}&video_type=${videoTypeVlaue}&per_page=${pageSize}&page=${page}&order=${searchOrder}`;
        let res = await fetch(url);
        let data = await res.json();
        setmainApiData(data);
        setisVideoRender(true);
      }
      setlodderDisplay("none");
      seterrorDisplay("none");
    } catch (error) {
      seterrorDisplay("none");
      {
        setTimeout(() => {
          ///  hide loder aftter 2sec
          setlodderDisplay("none");
          seterrorDisplay("block");
        }, 5000);
      }
      console.warn("error khaice ..");
    }
  }

  // data lode to depande on states
  useEffect(() => {
    data_Load();
  }, [page, searchText, searchOrder, isPhotoFiend, photoTypeValue, videoTypeVlaue]);
  
  // render Element
  return (
    <div id="gallery-con" className="w-full px-8 pb-28 relative">
      {mainApiData.total !== 0 ? (
        mainApiData.hits.map((e, i) => {
          return !isVideoRender ? ( // for photo render 
            <ImageCard
              key={i}
              userName={e.user}
              userImg={e.userImageURL}
              imgUrl={e.largeImageURL}
              downlodeUrl={e.largeImageURL}
              mainPageUrl={e.pageURL}
              id={e.id}
            />
          ) : (                       // for video render 
            <ImageCard
              key={i}
              userName={e.user}
              userImg={e.userImageURL}
              videoUrl={e.videos.large.url}
              downlodeUrl={e.videos.large.url}
              mainPageUrl={e.pageURL}
              id={e.id}
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
  searchText: "new wallpaper",
  photoTypeValue: "photo",
  videoTypeVlaue: 'film',
  pageSize: 50,
};
