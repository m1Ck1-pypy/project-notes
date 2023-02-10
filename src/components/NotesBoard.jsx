import React from 'react';

import { NoteItem } from './'


const NotesBoard = ({ notes }) => {
    return (
        <div className="notes__container">
            {notes.length > 0 ? notes.map((item, index) => (
                <NoteItem key={index} id={item.id} item={item} />
            )) : (
                <p className="text-center text-lg text-textLightMode dark:text-textDarkMode font-semibold">Not Notes Found!</p>
            )}
        </div>
    )
}

export default NotesBoard