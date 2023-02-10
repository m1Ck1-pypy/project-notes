import { useEffect, useState } from "react";
import { Header } from "./components";
import { Routes, Route } from "react-router-dom";
import { Create, Edit, Home } from './pages';

// import { notes_examples } from './utils/data';

const App = () => {

    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    const [mode, setMode] = useState(localStorage.getItem("theme"));

    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");


    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }

    onWindowMatch();

    useEffect(() => {
        if (mode === 'dark') {
            element.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        } else {
            element.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }, [mode])

    const handleMode = () => {
        setMode(mode === 'dark' ? 'light' : 'dark')
        if (mode === 'dark') {
            localStorage.removeItem('mode')
        } else {
            localStorage.setItem('mode', 'active')
        }
    }

    return (
        <div className="relative w-full min-h-screen dark:bg-mainBg bg-gray-200 transition-all duration-400 ease-linear">
            <Header mode={mode} handleMode={handleMode} />

            <Routes>
                <Route path="/" element={<Home notes={notes} />} />
                <Route path="/create" element={<Create setNotes={setNotes} />} />
                <Route path="/edit/:id" element={<Edit notes={notes} setNotes={setNotes} />} />
            </Routes>
        </div>
    )
}

export default App
