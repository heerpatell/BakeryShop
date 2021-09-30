import React,{useEffect,useState} from 'react'
import './adminContact.css'
import Adsidebar from '../Component/Adsidebar'
import {RiMailAddLine} from 'react-icons/ri'
import {RiMailCheckLine} from 'react-icons/ri'
import axios from 'axios'
import { useHistory } from 'react-router'

function AdminContact() {
    const [showNav,setShowNav]= useState(true)
    const [contact,setContact] = useState([])

    const history = useHistory()
    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/admincontact')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
    } 

    const getContact = async() =>{
        const response = await fetch('http://localhost:5001/contactapi/get');
            
        setContact(await response.json())
    }
    
    useEffect(() => {
        verifyUser();
        getContact();
    },[]);

    const [mailIcon,setMailIcon] = useState(<RiMailAddLine size={30}/>)
    
    const mailSubmit =  () =>{
        setMailIcon(<RiMailCheckLine size={30}/>)
    }

    return (
    <>
    <div className="adminHome">
    <Adsidebar show={showNav}/>
    <div className="contactHead">Contact Detail</div>
    {(contact.length===0) && (<div className='noDataContact'>Oops! No Contact details has arrived!</div>)}

    {
        contact.map((curElem)=>{
            return(
            <div className="adminOuterDiv" key={curElem.id}>
                <div className="mailContact" onClick={mailSubmit}>{mailIcon}</div>
                <div><span className="contactInfoHead">Name:  </span>{curElem.name}</div><br/>
                <div><span className="contactInfoHead">Email: </span>{curElem.email} </div><br/>
                <div><span className="contactInfoHead">Subject: </span>{curElem.sub}</div><br/>
                <div><span className="contactInfoHead">Message: </span>{curElem.msg}</div><br/>
            </div>   
            )
        })
    }

    </div>
    </>
    )
}

export default AdminContact
