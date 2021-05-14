import React from 'react';
import "./header.scss";
import Logo from "../../assents/Logo.png";

export const Header = () =>{

    return <div className="header"><img className="header__logo" src={Logo} alt="logo corporativo"/></div>
}