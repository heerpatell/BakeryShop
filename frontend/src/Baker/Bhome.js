import React,{useState,useEffect} from 'react'
import '../Baker/bhome.css'
import Sidebar from '../Component/Sidebar'
import {GiHamburgerMenu} from 'react-icons/gi'
// import {ImCross} from 'react-icons/im'
import { useHistory } from 'react-router'
import axios from 'axios'

function Bhome() {
    const [showNav,setShowNav]= useState(true)
    
    const history = useHistory()
    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/baker')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

    useEffect(() => {
        verifyUser();
    }, [])

    var displayNav = ()=>{
        setShowNav(!showNav)
    }

    return (
    <>
    <div className="bakerHome">
        {/* <header className="bakerHeader">
           <GiHamburgerMenu size={30} onClick={displayNav}/>
        </header> */}
        
        {/* <Sidebar show={showNav}/>  */}
        <Sidebar show={showNav} />
    </div>
    </>
    )
}

export default Bhome
