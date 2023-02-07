import React from 'react';
import { IoMdTrash } from 'react-icons/io'

const Note = () => {
    return (
        <div className="w-full relative px-10 py-8 flex flex-col gap-10">
            <div className="w-full flex items-center justify-between gap-3">
                <input type="text" placeholder='Title' className="min-w-180 w-700 h-10 bg-transparent outline-none text-textLightMode dark:text-textDarkMode text-md tracking-1 font-medium border-b border-borderLightMode dark:border-borderDarkMode text-base sm:text-xl" autoFocus />
                <button type='button' className='md:hidden p-2 bg-mainBg dark:bg-bgDarkMode text-textDarkMode dark:text-textLightMode font-semibold transition-all duration-400 ease-in-out tracking-1 hover:bg-red-500 dark:hover:bg-red-500'>
                    <IoMdTrash fontSize={20} />
                </button>
                <button type='button' className='hidden md:block w-[90px] px-4 py-2 bg-mainBg dark:bg-bgDarkMode text-textDarkMode dark:text-textLightMode font-semibold transition-all duration-400 ease-in-out tracking-1 hover:bg-red-500 dark:hover:bg-red-500'>
                    Delete
                </button>
            </div>
            <div className="w-full flex items-center border-b border-borderLightMode dark:border-borderDarkMode pb-1">
                <textarea className="w-full bg-transparent min-h-300 outline-none text-textLightMode dark:text-textDarkMode resize-none scrollbar-thumb-black dark:scrollbar-thumb-white scrollbar-thumb-rounded-md scrollbar-thin text-base sm:text-xl" placeholder='Note Details...'></textarea>
            </div>
            <div className="w-full flex items-center justify-end">
                <button type='button' className='w-full ssm:w-[90px] px-4 py-2 bg-mainBg dark:bg-bgDarkMode text-textDarkMode dark:text-textLightMode font-semibold transition-all duration-400 ease-in-out tracking-1 hover:bg-green-400 dark:hover:bg-green-400'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default Note