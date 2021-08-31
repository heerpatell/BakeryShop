import React,{useState} from 'react'
import '../Baker/bhome.css'
import Sidebar from '../Component/Sidebar'
import {GiHamburgerMenu} from 'react-icons/gi'
// import {ImCross} from 'react-icons/im'

function Bhome() {
    const [showNav,setShowNav]= useState(false)

    var displayNav = ()=>{
        setShowNav(!showNav)
    }

    return (
    <>
    <div className="bakerHome">
        <header className="bakerHeader">
           <GiHamburgerMenu size={30} onClick={displayNav}/>
        </header>
        
        <Sidebar show={showNav}/> 
    </div>
    </>
    )
}

export default Bhome
