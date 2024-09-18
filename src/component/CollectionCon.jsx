import React from "react";
import ImageCard from "./ImageCard";

const CollectionCon = ({ data }) => {
  return (
    <div className="my-galery relative">
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
            fromCollection={true}
          />
        );
      }) :
      <p className="text-center text-[1.6rem]  text-[#c4c4c4] absolute top-0 left-1/2 -translate-x-1/2">there are no collection</p>
      }
    </div>
  );
};

export default CollectionCon;
