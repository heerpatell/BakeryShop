import React,{useState} from 'react'
import './bprofile.css'
import Sidebar from '../Component/Sidebar'
import './bprofile.css'
import axios from 'axios'
import { useHistory } from 'react-router'



function Bprofile() {

    let history = useHistory()

    const logOutClicked = () =>{
        console.log("clicked")
        axios.get("http://localhost:5000/auth/logout")
        .then(res=>{
            history.push('/sigin',{
                replace:true
            })
            if(res.status!=200){
                const error = new Error(res.error)
                throw error       
            }
        })
        .catch((e)=>{
            console.log("error: ",e)
        })
    }

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

        <button className="logoutbtn" onClick={logOutClicked}>Log out </button>
        
        <br/><br/>  
        <h3>Profile Details</h3>
    </div>
    </>
    )
}

export default Bprofile
