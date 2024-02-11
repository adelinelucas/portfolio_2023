import React from 'react';
import {NavLink } from 'react-router-dom';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSalesforce } from "react-icons/fa6";
import './style.css'; 

const Navbar = () => {
    return (
        <aside className='aside_navigate-profils'>
            <NavLink exact='true' activeclassname="active" to="webdev" className="webdev-profil">
                Profil Web dev <HiOutlineDesktopComputer/>
            </NavLink>
            <NavLink exact='true' activeclassname="active" to="/" className="salesforce-profil">
                Profil Salesforce <FaSalesforce/>
            </NavLink>
      </aside>
    );
};

export default Navbar;