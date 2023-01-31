import React from 'react';
import { HiMoon } from 'react-icons/hi';
import { WiSolarEclipse } from 'react-icons/wi';

const StyleMode = ({ setMode, mode }) => {
    return (
        <div>
            <label htmlFor="dark">
                <span className="title"><WiSolarEclipse fontSize={24} className={`${mode === 'light' ? 'text-yellow-500' : 'text-white'}`} /></span>
                <span className="action">
                    <input onChange={setMode} type="checkbox" name="dark" id="dark" />
                    <i></i>
                </span>
                <span className="title"><HiMoon fontSize={24} className={`${mode === 'dark' ? 'text-yellow-300' : 'text-gray-500'}`} /></span>
            </label>
        </div>
    )
}

export default StyleMode