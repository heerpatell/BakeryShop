import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './sidebar.css'
import {FaHome} from 'react-icons/fa'
import {GiCakeSlice} from 'react-icons/gi'
import {BiReceipt} from 'react-icons/bi'
import {RiHistoryLine} from 'react-icons/ri'
import {FiLogOut} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'
import { useHistory } from 'react-router'
import axios from 'axios'

function SidebarCustomer({show}) {

    let history = useHistory()

    const logOutClicked = () =>{
        console.log("clicked")
        axios.get("http://localhost:5001/auth/logout",{
            withCredentials:true
        })
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
        <li className="baker-list-item"><Link to="/customer" className="baker-list-link"><FaHome/> Home</Link></li>
        <li className="baker-list-item"><Link to="/customer/profile" className="baker-list-link"><CgProfile/> Profile</Link></li>
        <li className="baker-list-item"><Link to="/customer/product" className="baker-list-link"><GiCakeSlice/>  Product</Link></li>
        <li className="baker-list-item"><Link to="/customer/recentorder" className="baker-list-link"><BiReceipt/>Recent Order</Link></li>
        <li className="baker-list-item"><Link to="/customer/orderhistory" className="baker-list-link"><RiHistoryLine/>Order History</Link></li>
        <li className="baker-list-item"><Link to="/signin" onClick={logOutClicked} className="baker-list-link"><FiLogOut/>Log out</Link></li>
    </ul>
    </div>
    </>
    )
}

export default SidebarCustomer
