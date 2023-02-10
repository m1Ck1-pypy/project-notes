import React, { useState, useEffect } from 'react';
import { IoMdTrash } from 'react-icons/io'
import { useNavigate, useParams } from 'react-router-dom';
import useCreateDate from '../hooks/useCreateDate';

const Note = ({ notes, setNotes }) => {
    const { id } = useParams();
    const note = notes.find((item) => item.id === id)

    const [title, setTitle] = useState(note.title);
    const [details, setDetails] = useState(note.details);
    const [isDelete, setIsDelete] = useState(false);

    const date = useCreateDate();

    const navigate = useNavigate();



    const handleSave = (e) => {
        e.preventDefault()

        if (title && details) {
            const newNote = { ...note, title, details, date }

            const newNotes = notes.map((item) => {
                if (item.id === id) {
                    item = newNote;
                }
                return item;
            })

            setNotes(newNotes)
        }
        navigate('/');
    }

    const handleDelete = (e) => {
        e.preventDefault()

        const newNotes = notes.filter((item) => item.id !== id);

        setNotes(newNotes);
        navigate('/');
    }

    return (
        <div className="w-full relative px-10 py-8 flex flex-col gap-10">
            <div className="w-full flex items-center justify-between gap-3">
                <input
                    type="text"
                    placeholder='Title'
                    className="min-w-180 w-700 h-10 bg-transparent outline-none text-textLightMode dark:text-textDarkMode text-md tracking-1 font-medium border-b border-borderLightMode dark:border-borderDarkMode text-base sm:text-xl"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <button
                    type='button'
                    className='md:hidden p-2 bg-mainBg dark:bg-bgDarkMode text-textDarkMode dark:text-textLightMode font-semibold transition-all duration-400 ease-in-out tracking-1 hover:bg-red-500 dark:hover:bg-red-500'
                    onClick={() => setIsDelete(true)}
                >
                    <IoMdTrash fontSize={20} />
                </button>
                <button
                    type='button'
                    className='hidden md:block w-[90px] px-4 py-2 bg-mainBg dark:bg-bgDarkMode text-textDarkMode dark:text-textLightMode font-semibold transition-all duration-400 ease-in-out tracking-1 hover:bg-red-500 dark:hover:bg-red-500'
                    onClick={() => setIsDelete(true)}
                >
                    Delete
                </button>
            </div>
            <div className="w-full flex items-center border-b border-borderLightMode dark:border-borderDarkMode pb-1">
                <textarea
                    className="w-full bg-transparent min-h-300 outline-none text-textLightMode dark:text-textDarkMode resize-none scrollbar-thumb-black dark:scrollbar-thumb-white scrollbar-thumb-rounded-md scrollbar-thin text-base sm:text-xl"
                    placeholder='Note Details...'
                    onChange={(e) => setDetails(e.target.value)}
                    value={details}
                />
            </div>
            <div className="w-full flex items-center justify-end">
                <button
                    type='button'
                    className='w-full ssm:w-[90px] px-4 py-2 bg-mainBg dark:bg-bgDarkMode text-textDarkMode dark:text-textLightMode font-semibold transition-all duration-400 ease-in-out tracking-1 hover:bg-green-500 dark:hover:bg-green-400'
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
            {isDelete && (
                <div className="absolute w-[200px] top-20 right-10 bg-gray-200 dark:bg-mainBg border border-black dark:border-white dark:text-white px-2 py-4 flex flex-col items-center justify-around gap-5 transition-all duration-400 ease-in-out">
                    <p>Delete your note?</p>
                    <div className="w-full flex items-center justify-evenly">
                        <button
                            type='button'
                            className="hover:bg-green-500 px-4 py-2 transition-all duration-400 ease-in-out"
                            onClick={handleDelete}
                        >
                            Yes
                        </button>
                        <button
                            type='button'
                            className="hover:bg-red-500 px-4 py-2 transition-all duration-400 ease-in-out"
                            onClick={() => setIsDelete(false)}
                        >
                            No
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Note