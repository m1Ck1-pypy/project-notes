import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { MdAdd, MdOutlineClear } from 'react-icons/md'
import { NavLink } from 'react-router-dom';

import { NotesBoard } from '../components';


const Home = ({ notes }) => {
    const [searchValue, setSearchValue] = useState('');
    const [filteredNotes, setFilteredNotes] = useState(notes);

    const handleSearch = () => {
        setFilteredNotes(notes.filter((data) =>
            data.title.includes(searchValue) || data.details.includes(searchValue))
        )
    }

    useEffect(handleSearch, [searchValue])


    return (
        <div className="w-full relative px-10 py-8 flex flex-col gap-10">
            <div className="relative w-full md:w-600 flex items-center justify-between gap-2 border border-borderLightMode dark:border-borderDarkMode rounded-full transition-all duration-400 ease-in-out px-4 py-2">
                <div className="mr-2">
                    <AiOutlineSearch className="text-2xl text-textLightMode dark:text-textDarkMode" />
                </div>
                <input
                    type="text"
                    className="w-full bg-transparent outline-none text-textLightMode dark:text-textDarkMode text-md tracking-1 font-medium"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                    <MdOutlineClear
                        className="text-2xl cursor-pointer text-textLightMode dark:text-textDarkMode"
                        onClick={() => setSearchValue('')}
                    />
                )}
            </div>

            <NotesBoard notes={filteredNotes} />

            <NavLink to="/create" className="fixed md:bottom-16 md:right-16 bottom-7 right-7 p-4 rounded-full bg-mainBg dark:bg-[#ddd] shadow-element cursor-pointer transition-all duration-400 ease-in-out">
                <MdAdd className="text-[28px] text-white dark:text-textLightMode" />
            </NavLink>
        </div>
    )
}

export default Home