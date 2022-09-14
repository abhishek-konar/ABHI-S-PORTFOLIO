import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Publications from './components/Publications'

//UI Router
const App = () => {
    //JSX
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/publications' element={<Publications />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App