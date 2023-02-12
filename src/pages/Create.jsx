import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { ColorItem } from '../components';
import useCreateDate from '../hooks/useCreateDate';
import { colors } from '../utils/data';

const Create = ({ setNotes }) => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [colorCheck, setColorCheck] = useState(0);

    const date = useCreateDate();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && details) {
            const note = {
                id: uuid(),
                title,
                details,
                date,
                color: colors[colorCheck]
            }
            setNotes(prevNotes => [note, ...prevNotes])
            navigate('/')
        }
    };

    const handleColor = (id) => {
        setColorCheck(id)
    };

    return (
        <div className="w-full relative px-10 py-8 flex flex-col gap-10">
            <div className="w-full flex items-center">
                <input
                    type="text"
                    placeholder='Title'
                    className="min-w-180 w-700 h-10 bg-transparent outline-none text-textLightMode dark:text-textDarkMode text-md tracking-1 font-medium border-b border-borderLightMode dark:border-borderDarkMode text-base sm:text-xl"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </div>

            <div className="w-full flex items-center border-b border-borderLightMode dark:border-borderDarkMode pb-1">
                <textarea
                    className="w-full bg-transparent min-h-300 outline-none text-lg text-textLightMode dark:text-textDarkMode resize-none scrollbar-thumb-black dark:scrollbar-thumb-white scrollbar-thumb-rounded-md scrollbar-thin"
                    placeholder='Note Details...'
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                />
            </div>

            <div className="w-fit flex flex-col flex-wrap gap-2">
                <p className="text-textLightMode dark:text-textDarkMode text-sm lg:text-lg font-medium">Background Note:</p>
                <div className="flex flex-wrap gap-3 items-center justify-between">
                    {colors && colors.map((item, index) => (
                        <ColorItem key={index} id={index} color={item} colorCheck={colorCheck} setColorCheck={handleColor} />
                    ))}
                </div>
            </div>

            <div className="w-full flex items-center justify-end">
                <button
                    type='button'
                    className='w-full ssm:w-[90px] px-4 py-2 bg-mainBg dark:bg-bgDarkMode text-textDarkMode dark:text-textLightMode font-semibold transition-all duration-400 ease-in-out tracking-1 hover:bg-green-400 dark:hover:bg-green-400'
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default Create