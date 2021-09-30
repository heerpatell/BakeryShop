import React,{useState,useEffect} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'
import { useHistory } from 'react-router'
import axios from 'axios'

function Crecorder() {
    const [showNav,setShowNav]= useState(true)
    
    let history = useHistory()

    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/customer')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

     useEffect(() => {
        verifyUser();
    }, [])
    
    return (
    <>
    <div>
        <SidebarCustomer show={showNav}/>
        <h3>Customer side</h3>
    </div>
    </>
    )
}

export default Crecorder
