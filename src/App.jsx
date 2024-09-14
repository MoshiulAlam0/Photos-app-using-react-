import "./App.css";

import React, { useState } from "react";
import Head from "./component/Head";
import Setting from "./component/Setting";
import MainPhotoCon from "./component/MainPhotoCon";
import { MyContext } from "./context/All_context";

import { Routes, Route } from "react-router-dom";

const App = () => {
  const [searchValue, setsearchValue] = useState();   /// for change Input Search Value.
  const [isPhotoSearch, setisPhotoSearch] = useState(true); //for search / fiend by Photo / Video.
  const [stockText, setstockText] = useState("Photos");   /// for change free stock text Photo / Video.
  const [order, setorder] = useState("popular"); /// for change latest / popular.
  // const [switchPhotoToVideo, setswitchPhotoToVideo] = useState();


  return (
    <main id="main" suppressHydrationWarning>
      <MyContext.Provider
        value={{
          searchState: { searchValue, setsearchValue },
          videoOrPhotoSearchState: { isPhotoSearch, setisPhotoSearch },
          orderState: {order, setorder},
        }}
      >
        <Head />
        <Setting stockValue={stockText} />
        <Routes>
          {/* <Route path="/" element={<MainPhotoCon/>} /> */}
          <Route
            path="/"
            element={
              <MainPhotoCon
                searchText={searchValue}
                isPhotoFiend={isPhotoSearch}
                stockValueSet={setstockText}
                searchOrder={order}
              />
            }
          />
        </Routes>
      </MyContext.Provider>
    </main>
  );
};

export default App;
