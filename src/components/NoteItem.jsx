import React from 'react'
import { useNavigate } from 'react-router-dom'



const NoteItem = ({ id }) => {
    const navigate = useNavigate()
    return (
        <div className="notes__item" onClick={() => navigate(`/edit/${id}`)}>
            NoteItem
        </div>
    )
}


export default NoteItem