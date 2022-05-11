import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { TextArea } from "web3uikit";

const Home = () => {
  return (
    <>
    <div className="mainContent">
      <div className="profileTweet">
        <img
          src={defaultImgs[0]}
          className="profilePic"
        ></img>
        <div className="tweetBox">
          <TextArea
            label=""
            name="tweetTxtArea"
            value="GM World"
            type="text"
            width="95%"
          ></TextArea>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
