import React from 'react';
import './style.css';

const Logo = () => {
    const presentation = 'Adeline';
    const presArray = presentation.split('');
    console.log(presArray)
    return (
        <aside className='header__baseline'>
            {presArray.map((letter, index)=>(
                <h2 className="header__baseline-animated" key={index}>{letter}</h2>
            ))}
        </aside>
    );
};

export default Logo;