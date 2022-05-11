import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { TextArea, Icon } from "web3uikit";

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

          <div className="imgOrTweet">
            <div className="imgDiv">
              <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
            </div>

             <div className="tweetOptions">
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
