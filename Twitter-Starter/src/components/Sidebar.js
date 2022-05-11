import React from "react";
import './Sidebar.css';
import { Icon } from "web3uikit";

const Sidebar = () => {
  

  return (
    <>
    <div className="siderContent">
      <div className="menu">
        <div className="details">
          <Icon fill="#ffffff" size={33} svg="twitter" />
        </div>

        <div className="menuItems">
          <Icon fill="#ffffff" size={33} svg="list" />
          Home
        </div>

         <div className="menuItems">
          <Icon fill="#ffffff" size={33} svg="user" />
          Profile
        </div>

         <div className="menuItems">
          <Icon fill="#ffffff" size={33} svg="cog" />
          Settings
        </div>

      </div>
    </div>
    </>
  );
};

export default Sidebar;

