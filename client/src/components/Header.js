import React from 'react';
import logo from '../assets/ebook.svg';
import Navbar from './Navbar';

export default function Header() {
    return (
        <header>
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar />
        </header>
    )
}
