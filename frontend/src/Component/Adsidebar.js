import React,{useState} from 'react'
import { useHistory } from 'react-router'
import {GiCakeSlice} from 'react-icons/gi'
import {BiReceipt} from 'react-icons/bi'
import {RiHistoryLine} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Adsidebar({show}) {
    let history = useHistory()

    const logOutClicked = () =>{
        console.log("clicked")
        axios.get("http://localhost:5001/auth/logout")
        .then(res=>{
            history.push('/signin',{
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
    return (
    <>
    <div className={show ? 'sideNav active' : 'sideNav'}>
    <ul className="baker-list"> 
        <li className="baker-list-item"><Link to="/adminbakercontact" className="baker-list-link"><GiCakeSlice/>Bakers</Link></li>
        <li className="baker-list-item"><Link to="/admincustomercontact" className="baker-list-link"><BiReceipt/>Customers</Link></li>
        <li className="baker-list-item"><Link to="/admincontact" className="baker-list-link"><RiHistoryLine/>Contacts</Link></li>
        <li className="baker-list-item"><Link onClick={logOutClicked} className="baker-list-link"><FiLogOut/>Log out</Link></li>
    </ul>
    </div>
    </>
    )
}

export default Adsidebar
