import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { StyleMode } from './';


const Header = ({ mode, handleMode }) => {


    return (
        <div className="w-full h-80 px-8 md:px-14 py-5 flex items-center justify-between text-textLightMode dark:text-textDarkMode transition-all duration-400 ease-in-out">
            <NavLink to="/">
                <p className="text-[22px] sm:text-3xl font-bold tracking-widest transition-all duration-400 ease-in-out">My Notes</p>
            </NavLink>

            <StyleMode setMode={handleMode} mode={mode} />
        </div >
    )
}

export default Header