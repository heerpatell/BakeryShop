import React,{useState,useEffect} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'
import './cproduct.css'
import axios from 'axios'
import { useHistory } from 'react-router'

function Cproduct() {
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
        {
            
        }
    </div>
    </>
    )
}

export default Cproduct
