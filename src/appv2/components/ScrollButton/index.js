import React from 'react';
import './style.css'; 

import { HiChevronDoubleUp } from "react-icons/hi";

const ScrollButton = () => {
    return (
        <div className='scroll-button'>
            <a href="#hautPage" className=''><HiChevronDoubleUp /></a>
        </div>
    );
};

export default ScrollButton;