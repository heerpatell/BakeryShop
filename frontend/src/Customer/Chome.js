import React,{useState} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'

function Chome() {
    const [showNav,setShowNav]= useState(true)
    return (
    <>
    <div>
        <SidebarCustomer show={showNav}/>
        <h3>Customer side</h3>
    </div>
    </>
    )
}

export default Chome
