import React,{useEffect,useState} from 'react'
import './adminContact.css'

function AdminContact() {
    const [contact,setContact] = useState([])

    const getContact = async() =>{
        const response = await fetch('http://localhost:5001/contactapi/get');
            
        setContact(await response.json())
    }
    
    useEffect(() => {
        getContact();
    },[]);

    return (
    <>
    <div className="adminHome">
    <div className="contactHead">Contact Detail</div>
    {(contact.length===0) && (<div className='noDataContact'>Oops! No Contact details has arrived!</div>)}

    {
        contact.map((curElem)=>{
            return(
            <div className="adminOuterDiv" key={curElem.id}>
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
