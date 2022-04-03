import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className='nav'>
            <div>
                <p> Gamers-Pulse  </p>
            </div>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/Dashboard'>Dashboard</Link>
                <Link to='/Blogs'>Blogs</Link>
                <Link to='/About'>About</Link>
            </div>
        </nav>
    );
};

export default Navigation;