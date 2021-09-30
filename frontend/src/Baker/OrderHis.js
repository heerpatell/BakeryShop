import React,{useState,useEffect} from 'react'
import Sidebar from '../Component/Sidebar';
import './ordHistory.css'
import { useHistory } from 'react-router';
import axios from 'axios';

function OrderHis() {
    const [showNav,setShowNav] = useState(true);
    
    const history = useHistory()
    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/baker')
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
        {/* <header className="bakerHeader">
            <GiHamburgerMenu size={30} onClick={displayNav}/>
        </header> */}
        <Sidebar  show={showNav}/> 
        <div className="rOrderHead"><h3>Order History</h3></div>

        <div className="ordHisList">
            <div className="ordHisBox">
                <div className="ordHisName">Order Id: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Customer Name: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Product Name: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Quantity: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Price: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Payment Type: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Date: <span className="ordHisdVal">123</span></div>
            </div> 
            {/* <div className="recOrdBox">
                abc
            </div>   */}
        </div>

    </div>
    </>
    )
}

export default OrderHis
