import React from "react";
import './TweetInFeed.css';

import golf from "../images/golf.png";
import canoe from "../images/canoe.png";
import { defaultImgs } from "../defaultimgs";
import { Icon } from "web3uikit";

const TweetInFeed = () => {
  

  return (
    <>
      <div className="feedTweet">
        <img src={defaultImgs[0]} className="profilePic"></img>
        <div className="completeTweet">

          <div className="who">
            Gasper
            <div className="accWhen">0x42..314 · 1h</div>
          </div>

           <div className="tweetContent">
            Nice Day On The Sun Today! Played golf with my friends
            <img src={golf} className="tweetImg"></img>
          </div>


        </div>
      </div>
    </>
  );
};

export default TweetInFeed;

