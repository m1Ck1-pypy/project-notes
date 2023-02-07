import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { StyleMode } from './';

import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
    const [mode, setMode] = useState(localStorage.getItem("theme"));

    const [search, setSearch] = useState(false);

    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // console.log(darkQuery)

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }

    onWindowMatch();

    useEffect(() => {
        if (mode === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark');
            localStorage.removeItem('theme')
        }
    }, [mode])

    const handleMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark')
        if (mode === 'dark') {
            localStorage.removeItem('mode')
        } else {
            localStorage.setItem('mode', 'active')
        }
    }

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