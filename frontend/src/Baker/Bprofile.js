import React,{useState} from 'react'
import './bprofile.css'
import Sidebar from '../Component/Sidebar'

function Bprofile() {
    const [showNav,setShowNav] = useState(true);
    return (
    <>
    <div>
        {/* <header className="bakerHeader">
            <GiHamburgerMenu size={30} onClick={displayNav}/>
        </header> */}
        <Sidebar  show={showNav}/>     
    </div>
    </>
    )
}

export default Bprofile
