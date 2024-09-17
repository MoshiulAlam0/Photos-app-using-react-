import React from "react";
import ImageCard from "./ImageCard";

const CollectionCon = ({ data }) => {
  return (
    <div className="my-galery">
      {data.length > 0 ? data.map((e, i) => {
        return (
          <ImageCard
            key={i}
            userName={e.user}
            userImg={e.userImageURL}
            imgUrl={e.largeImageURL}
            downlodeUrl={e.largeImageURL}
            mainPageUrl={e.pageURL}
            id={e.id}
          />
        );
      }) :
      <p className="text-center text-[2rem] text-[#c4c4c4]">there are no collection</p>
      }
    </div>
  );
};

export default CollectionCon;
