import React,{useState,useEffect} from 'react'
import Adsidebar from '../Component/Adsidebar'
import './AdminContact'
import axios from 'axios'
import { useHistory } from 'react-router'

function AbakerCon() {
    const [showNav,setShowNav]= useState(true)
    const [bakerconact,setBakercontact] = useState([])

    const history = useHistory()
    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/adminbakercontact')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
    } 

    const getBakerContact = async() =>{
        const response = await fetch('http://localhost:5001/admin/getbakerdetail');
            
        setBakercontact(await response.json())
    }
    
    useEffect(() => {
        verifyUser();
        getBakerContact();
    },[]);

    return (
    <>
    <div>
        <Adsidebar show={showNav}/>
        <div className="contactHead">Bakers Detail</div>
        {
            bakerconact.map((curElem)=>{
                return(
                <div className="adminOuterDiv" >
                    <div><span className="contactInfoHead">Customer id: </span>{curElem._id}</div><br/>
                    <div><span className="contactInfoHead">Name:  </span>{curElem.name}</div><br/>
                    <div><span className="contactInfoHead">User Name: </span>{curElem.uname}</div><br/>
                    <div><span className="contactInfoHead">Email: </span>{curElem.email}</div><br/>
                </div>   
                )
            })      
        }
    </div>
    </>
    )
}

export default AbakerCon
