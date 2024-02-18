import React, { useEffect, useState } from 'react';
import {NavLink } from 'react-router-dom';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaSalesforce } from "react-icons/fa6";
import './style.css'; 
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [salesforceProfil, setSalesforceProfil] = useState(true)
    const navigate = useNavigate();

    const handleSwitch = () =>{
        setSalesforceProfil(!salesforceProfil);
        salesforceProfil != true ? navigate(`/`) : navigate(`/webdev`);
    }

    return (
        <aside className='aside_navigate-profils'>
            <div className={salesforceProfil ? 'salesforce-profil' : 'salesforce-profil-off'}>
            <FaSalesforce/>Profil Salesforce
            </div>
            <label className="switch">
                <input type="checkbox" onClick={handleSwitch}/>
                <span className="slider"></span>
            </label>
            <div className={salesforceProfil ? 'webdev-profil-off' : 'webdev-profil'}>
                <HiOutlineDesktopComputer/>Profil Web dev
            </div>  
      </aside>
    );
};

export default Navbar;