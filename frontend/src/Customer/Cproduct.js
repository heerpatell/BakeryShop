import React,{useState} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'
import './cproduct.css'

function Cproduct() {
    const [showNav,setShowNav]= useState(true)

    return (
    <>
    <div>
        <SidebarCustomer show={showNav}/>
        {
            
        }
    </div>
    </>
    )
}

export default Cproduct
