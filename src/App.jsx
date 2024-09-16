import "./App.css";

import React, { useState } from "react";
import Head from "./component/Head";
import Setting from "./component/Setting";
import MainPhotoCon from "./component/MainPhotoCon";
import { MyContext } from "./context/All_context";

import { Routes, Route } from "react-router-dom";
import NavBar from "./component/sunComonent/NavBar";
import MyCollection from "./component/MyCollection";

const App = () => {
  const [searchValue, setsearchValue] = useState(); /// for change (Input )Search Value.
  const [isPhotoSearch, setisPhotoSearch] = useState(true); //for (search / fiend) by Photo / Video.
  const [stockText, setstockText] = useState("Photos"); /// for change free stock (text Photo / Video).
  const [photoType, setphotoType] = useState(); ///for set video and photo type like (all, photo, vector, etc).
  const [videoType, setvideoType] = useState(); ///for set video and photo type like (all, photo, vector, etc).
  const [order, setorder] = useState("popular"); /// for change (latest / popular).
  const [myCollection, setmyCollection] = useState({
    photo:[],
    video:[],
  });
  console.log(myCollection)


  return (
    <main id="main" className="relative" suppressHydrationWarning>
      <MyContext.Provider
        value={{
          searchState: { searchValue, setsearchValue },
          videoOrPhotoSearchState: { isPhotoSearch, setisPhotoSearch },
          orderState: { order, setorder },
          typeState: { photoType, setphotoType, videoType, setvideoType },
          collectionState:{myCollection, setmyCollection}
        }}
      >
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
              <Head />
              <Setting stockValue={stockText} />
                <MainPhotoCon
                  searchText={searchValue}
                  isPhotoFiend={isPhotoSearch}
                  stockValueSet={setstockText}
                  photoTypeValue={photoType}
                  videoTypeVlaue={videoType}
                  searchOrder={order}
                />
              </>
            }
          />
          <Route
            path="/myCollection"
            element={
              <MyCollection/>
            }
          />
        </Routes>
      </MyContext.Provider>
    </main>
  );
};

export default App;
