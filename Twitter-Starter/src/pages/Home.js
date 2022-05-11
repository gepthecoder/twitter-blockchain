import React from "react";
import "./Home.css";
import { defaultImgs } from "../defaultimgs";
import { TextArea, Icon } from "web3uikit";
import { useState, useRef } from "react";

const Home = () => {

  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();

  const [theFile, setTheFile] = useState();
  const [tweet, setTweet] = useState();

  const onImageClick = () => {
   inputFile.current.click();
  };

  // whenever the event happens in the file selector we get the file we selected and save it to a img const
  // afterwards we set the selected file to a temp object url so we can display it
  const changeHandler = (event) => {
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };

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
          {selectedFile && (
             <img src={selectedFile} className="tweetImg"></img>
           )}
          <div className="imgOrTweet">
            <div className="imgDiv" onClick={onImageClick}>
              <input
                type="file"
                 name="file"
                 ref={inputFile}
                 onChange={changeHandler}
                 style={{ display: "none"}}
              />
              <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
            </div>

             <div className="tweetOptions">
              <div className="tweet" /*onClick={saveTweet}*/>Tweet</div>
                <div className="tweet" /*onClick={maticTweet}*/ style={{ backgroundColor: "#8247e5" }}>
                  <Icon fill="#ffffff" size={20} svg="matic" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;
