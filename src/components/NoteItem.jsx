import React from 'react'
import { useNavigate } from 'react-router-dom'


const NoteItem = ({ id, item, color }) => {

    const navigate = useNavigate()

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className="notes__item  text-textLightMode"
            onClick={() => navigate(`/edit/${id}`)}
        >
            <div className="font-semibold tracking-1">{item.title}</div>
            <div className="text-sm">{item.date}</div>
        </div>
    )
}


export default NoteItem