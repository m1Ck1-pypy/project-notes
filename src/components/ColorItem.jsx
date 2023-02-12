import React from 'react';
import { BiCheck } from 'react-icons/bi'

const ColorItem = ({ id, color, colorCheck, setColorCheck }) => {
    return (
        <div
            className={`w-7 h-7 flex items-center justify-center rounded-full cursor-pointer`}
            style={{ backgroundColor: color }}
            onClick={() => setColorCheck(id)}
        >
            {colorCheck === id && (
                <BiCheck className="text-xl" />
            )}
        </div>
    )
}

export default ColorItem;