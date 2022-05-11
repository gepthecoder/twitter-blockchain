import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";

const Home = () => {
  return (
    <>
    <div className="mainContent">
      <div className="profileTweet">
        <img
          src={defaultImgs[0]}
          className="profilePic"
        >
        </img>
      </div>
    </div>
    </>
  );
};

export default Home;
