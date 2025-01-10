import React from 'react'
import Contact from './Contact';
import Profile from './Profile';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>
const About = () => <h2>About Page</h2>
const NotFound = () => <h1 className='text-danger text-center'>Not Found</h1>

const Tabs = () => {
    const name = "John";

    return (
        <Router>
            <Link to="/home" className='p-2 fs-3'>Home</Link> | 
            <Link to="/about" className='p-2 fs-3'>About</Link> |
            <Link to="/contact" className='p-2 fs-3'>Contact</Link> |
            <Link to={`/profile/${name}`} className='p-2 fs-3'>Profile</Link>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/profile/:username' element={<Profile />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default Tabs;