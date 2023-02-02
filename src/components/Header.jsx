import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { StyleMode } from './';

const Header = () => {
    const [mode, setMode] = useState('light');

    useEffect(() => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [mode])

    const handleMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="w-full h-80 px-14 py-5 flex items-center justify-between text-textLightMode dark:text-textDarkMode">
            <NavLink to="/">
                <p className="text-3xl font-bold tracking-widest">My Notes</p>
            </NavLink>

            <StyleMode setMode={handleMode} mode={mode} />
        </div >
    )
}

export default Header