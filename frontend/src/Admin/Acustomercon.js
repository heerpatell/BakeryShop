import React,{useState,useEffect} from 'react'
import Adsidebar from '../Component/Adsidebar'
import './AdminContact'

function Acustomercon() {
    const [showNav,setShowNav]= useState(true)
    const [custconact,setCustcontact] = useState([])

    const getCustContact = async() =>{
        const response = await fetch('http://localhost:5001/admin/getcustomerdetail');
            
        setCustcontact(await response.json())
    }
    
    useEffect(() => {
        getCustContact();
    },[]);

    return (
    <>
    <div>
        <Adsidebar show={showNav}/>
        <div className="contactHead">Customers Detail</div>
        {(custconact.length===0) && (<div className='noDataContact'>Oops! No Customer Contact details has arrived!</div>)}
        {
         custconact.map((curElem)=>{
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

export default Acustomercon
