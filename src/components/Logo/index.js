import React from 'react';
import './style.css';

const Logo = () => {
    const presentation = 'Adeline';
    const presArray = presentation.split('');
    console.log(presArray)
    return (
        <section className='header__baseline'>
            {presArray.map((letter)=>(
                <h2 className="header__baseline-animated">{letter}</h2>
            ))}
        </section>
    );
};

export default Logo;