import React, { useContext } from "react";
import { MyContext } from "../../context/All_context";
import { Link } from "react-router-dom";

const Category = () => {
  const { searchState } = useContext(MyContext);
  let category = [
    "mosque",
    "quran",
    "islamic",
    "backgrounds",
    " fashion",
    " nature",
    " science",
    " education",
    " feelings",
    " health",
    " people",
    " religion",
    " places",
    " animals",
    " industry",
    " computer",
    " food",
    " sports",
    " transportation",
    " travel",
    " buildings",
    " business",
    " music",
  ];
  return (
    <div className="w-full px-2 py-4 relative z-10">
      <ul className="w-full flex-wrap flex items-center justify-center gap-[2vmin] capitalize font-extralight text-[#ffffff]">
        {category.map((e, i) => {
          return (
            <Link
              to={"/"}
              onClick={(item) => {
                searchState.setsearchValue(item.target.innerText)
              }}
              className="px-[2vmin] text-[1.3rem] backdrop-blur-sm opacity-[.5]  hover:opacity-100   rounded-full border-[1px] border-solid border-[#bababa] transition-all hover:bg-[#00c42163]"
              href="/"
              key={i}
            >
              {e}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
