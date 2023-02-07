import React, { useEffect, useState } from 'react';
import { HiMoon } from 'react-icons/hi';
import { WiSolarEclipse } from 'react-icons/wi';

const StyleMode = ({ setMode, mode }) => {

    const getMode = () => localStorage.getItem('mode')

    return (
        <div>
            <label htmlFor="dark">
                <span className="title"><WiSolarEclipse fontSize={24} className={`${mode !== 'dark' ? 'text-yellow-500' : 'text-white'}`} /></span>
                <span className="action">
                    <input onChange={setMode} type="checkbox" name="dark" id="dark" checked={getMode() === 'active' ? true : false} />
                    <i></i>
                </span>
                <span className="title"><HiMoon fontSize={24} className={`${mode === 'dark' ? 'text-yellow-300' : 'text-gray-500'}`} /></span>
            </label>
        </div>
    )
};

export default StyleMode;