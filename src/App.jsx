import { Header } from "./components";
import { Routes, Route, NavLink } from "react-router-dom";

import { Create, Edit, Home } from './pages';
import { MdAdd } from 'react-icons/md'

const App = () => {

    return (
        <div className="relative w-full min-h-screen dark:bg-mainBg bg-gray-200 transition-all duration-400 ease-linear">
            <Header />

            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit" element={<Edit />} />
            </Routes>

            <NavLink to="/create" className="absolute bottom-20 right-20 p-4 rounded-full bg-mainBg dark:bg-[#ddd] shadow-element cursor-pointer">
                <MdAdd className="text-[28px] text-white dark:text-textLightMode" />
            </NavLink>
        </div>
    )
}

export default App
