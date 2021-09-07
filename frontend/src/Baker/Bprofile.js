import React,{useState} from 'react'
import './bprofile.css'
import Sidebar from '../Component/Sidebar'
import './bprofile.css'

function Bprofile() {

    const [showNav,setShowNav] = useState(true);
    return (
    <>
    <Sidebar  show={showNav}/>   
    {/* <header className="bakerHeader">
            <GiHamburgerMenu size={30} onClick={displayNav}/>
        </header> */}
    <div className="bprofile">
        <div className="bphoto">
            photo
        </div>
        <div className="logoutbtn">Log out  </div>
        <br/><br/>  
        <h3>Profile Details</h3>
    </div>
    </>
    )
}

export default Bprofile
