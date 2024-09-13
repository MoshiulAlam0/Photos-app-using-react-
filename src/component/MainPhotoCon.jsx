import React, { useContext, useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import PropTypes from "prop-types";
import { MyContext } from "../context/All_context";
import Lodder from "./sunComonent/Lodder";

const MainPhotoCon = ({ color, searchText, imgType, pageSize }) => {
  const [page, setpage] = useState(1);
  const myState = useContext(MyContext);
  const [lodderDisplay, setlodderDisplay] = useState('block');

  // api data storage :
  const [mainApiData, setmainApiData] = useState({
    total: 0,
    totalHits: 0,
    hits: [],
  });

  // for data lode (function):
  async function data_Load() {
    try {
      setmainApiData({
        total: 0,
        totalHits: 0,
        hits: [],
      })
      setlodderDisplay('block')
      let keyCode = "45929705-2b07f79792d4b03a2400490cc";
      let url = `https://pixabay.com/api/?key=${keyCode}&q=${color}+${searchText}&image_type=${imgType}&per_page=${pageSize}&page=${page}`;
      let res = await fetch(url);
      let data = await res.json();
      setmainApiData(data);
      setlodderDisplay('none')
    } catch (error) {
      console.warn("error khaice ..");
    }
  }
  
  useEffect(() => {
    data_Load();
  }, []);
  
  useEffect(() => {
    data_Load();
  }, [page, searchText]);

  console.log(searchText);

  return (
    <div id="gallery-con" className="w-full px-8 pb-28 relative">
      {mainApiData.total !== 0 ? (
        mainApiData.hits.map((e, i) => {
          return (
            <ImageCard
              key={i}
              userName={e.user}
              userImg={e.userImageURL}
              imgUrl={e.largeImageURL}
            />
          );
        })
      ) : (
        <h1 className="text-center text-[#bababa] text-[5vmin]  ">
          Something is wrong . <br /> we are sorry.
        </h1>
      )}
      <div style={{display: lodderDisplay}} className="absolute bottom-16 left-1/2 -translate-x-1/2">
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
};
MainPhotoCon.defaultProps = {
  color: "all",
  searchText: "cat",
  imgType: "photo",
  pageSize: 60,
};
