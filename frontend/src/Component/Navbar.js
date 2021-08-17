import React,{useState} from 'react'
import '../Component/navbar.css'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdCancel} from 'react-icons/md'

function Navbar() {

    return (
        <>
        <header>
                <nav className="main-nav">
                    <label className="logo"><soan>B</soan>akery <span>S</span>hop</label>
                    <ul className="list">
                        <li><Link to="signup" className="Navsignup item">Sign up</Link></li>
                        <li><Link to="signin" className="Navsignin item">Sign in</Link></li>
                        <button className="mobile-menu-icon"><GiHamburgerMenu/></button>
                    </ul>
                </nav>
        </header>
        </>
    )
}

export default Navbar
