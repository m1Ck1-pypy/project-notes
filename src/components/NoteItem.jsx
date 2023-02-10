import React from 'react'
import { useNavigate } from 'react-router-dom'


const NoteItem = ({ id, item }) => {

    const navigate = useNavigate()

    return (
        <div
            style={{ backgroundColor: `${item.color}` }}
            className="notes__item  text-textLightMode transition-all duration-300 ease-in-out cursor-pointer"
            onClick={() => navigate(`/edit/${id}`)}
        >
            <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 hover:bg-bgCardHover transition-all duration-300 ease-in-out cursor-pointer"></div>
            <div className="font-semibold tracking-1">{item.title && item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}</div>
            <div className="text-sm">{item.date}</div>
        </div>
    )
}


export default NoteItem