import React from "react";
import { Link } from "react-router-dom";
import './Settings.css';

import { Input } from "web3uikit";

const Settings = () => {
  

  return (
    <>
    <div className="pageIdentify">Settings</div>
    <div className="settingsPage">
      <Input
        label="Name"
        name="NameChange"
        width="100%"
        labelBgColor="#141d26"
        /*onChange={(e)=> setUsername(e.target.value)}*/
      />

      <Input
        label="Bio"
        name="bioChange"
        width="100%"
        labelBgColor="#141d26"
        /*onChange={(e)=> setBio(e.target.value)}*/
      />

    </div>

    </>
  );
};

export default Settings;

