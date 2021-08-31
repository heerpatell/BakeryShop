import React,{useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from 'react-router-dom'
import './sidebar.css'
import {FaHome} from 'react-icons/fa'
import {GiCakeSlice} from 'react-icons/gi'
import {BiReceipt} from 'react-icons/bi'
import {RiHistoryLine} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'

function Sidebar({show}) {
    return (
    <>
    <div className={show ? 'sideNav active' : 'sideNav'}>
    <ul className="baker-list">
        <li className="baker-list-item"><Link to="/baker" className="baker-list-link"><FaHome/>  Home</Link></li>
        <li className="baker-list-item"><Link to="#" className="baker-list-link"><CgProfile/>  Profile</Link></li>
        <li className="baker-list-item"><Link to="/baker/product" className="baker-list-link"><GiCakeSlice/>  Products</Link></li>
        <li className="baker-list-item"><Link to="#" className="baker-list-link"><BiReceipt/>  Recent order</Link></li>
        <li className="baker-list-item"><Link to="#" className="baker-list-link"><RiHistoryLine/>  Order history</Link></li>
        <li className="baker-list-item"><Link to="#" className="baker-list-link"><FiLogOut/>  Log out</Link></li>
    </ul>
    </div>
    </>
    )
}

export default Sidebar
