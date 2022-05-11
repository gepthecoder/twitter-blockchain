import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import { defaultImgs } from "../defaultimgs";


const Profile = () => {
  

  return (
    <>
      <div className="pageIdentify">Profile</div>
      <img className="profileBanner" src={defaultImgs[1]}></img>
      <div className="pfpContainer">
         <img className="profilePFP" src={defaultImgs[0]}></img>
      </div>
    </>
  );
};

export default Profile;

