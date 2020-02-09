import React from 'react'
import NavIcon from "./NavIcon"
import {
    NavLink,
   
  } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar"> 
            <NavLink to="/settings"
             
            activeClassName="activeRoute">
            <NavIcon 
            iconurl={"https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/gear_fnbjbo.png"} 
            routename={"Settings"}/></NavLink>
             <NavLink to="/wallet"   
      activeClassName="activeRoute"   ><NavIcon 
            iconurl={"https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/wallet_qg6uwn.png"} 
            routename={"Wallet"}/></NavLink>
             <NavLink to="/home"   
      activeClassName="activeRoute"   ><NavIcon 
            iconurl={"https://res.cloudinary.com/munnotubbel/image/upload/v1581240455/wombat/home_shuqs8.png"} 
            routename={"Home"}/></NavLink>
             <NavLink to="/explorer"    
      activeClassName="activeRoute"  ><NavIcon 
            iconurl={"https://res.cloudinary.com/munnotubbel/image/upload/v1581240405/wombat/compass_wzpihn.png"} 
            routename={"Explorer"}/></NavLink>
        </div>
    )
}

export default NavBar;
