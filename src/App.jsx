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
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </div>
    )
}

export default App
