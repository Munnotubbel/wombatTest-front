import React from "react";
import NavIcon from "./NavIcon";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const buttonImgUrls = [
    "https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/gear_fnbjbo.png",
    "https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/wallet_qg6uwn.png",
    "https://res.cloudinary.com/munnotubbel/image/upload/v1581240455/wombat/home_shuqs8.png",
    "https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/compass_wzpihn.png"
  ];

  return (
    <div className="navbar">
      <NavLink to="/settings" activeClassName="activeRoute">
        <NavIcon iconurl={buttonImgUrls[0]} routename={"Settings"} />
      </NavLink>
      <NavLink to="/wallet" activeClassName="activeRoute">
        <NavIcon iconurl={buttonImgUrls[1]} routename={"Wallet"} />
      </NavLink>
      <NavLink to="/home" activeClassName="activeRoute">
        <NavIcon iconurl={buttonImgUrls[2]} routename={"Home"} />
      </NavLink>
      <NavLink to="/explorer" activeClassName="activeRoute">
        <NavIcon iconurl={buttonImgUrls[3]} routename={"Explorer"} />
      </NavLink>
    </div>
  );
};

export default NavBar;
