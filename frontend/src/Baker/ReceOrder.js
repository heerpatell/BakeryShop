import React,{useState} from 'react'
import Sidebar from '../Component/Sidebar';
import './receOrder.css'

function ReceOrder() {
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

export default ReceOrder
