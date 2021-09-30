import React,{useState,useEffect} from 'react'
import Sidebar from '../Component/Sidebar';
import './receOrder.css'
import axios from 'axios';
import { useHistory } from 'react-router';

function ReceOrder() {
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
        <div className="rOrderHead"><h3>Recent Orders</h3></div>  

        <div className="recOrdList">
            <div className="recOrdBox">
                <div className="recOrdName">Order Id: <span className="recOrdVal">123</span></div>
                <div className="recOrdName">Customer Name: <span className="recOrdVal">123</span></div>
                <div className="recOrdName">Product Name: <span className="recOrdVal">123</span></div>
                <div className="recOrdName">Quantity: <span className="recOrdVal">123</span></div>
                <div className="recOrdName">Price: <span className="recOrdVal">123</span></div>
                <div className="recOrdName">Payment Type: <span className="recOrdVal">123</span></div>
                <button className="recOrdDone">Order Done</button>
            </div> 
            {/* <div className="recOrdBox">
                abc
            </div>   */}
        </div>

    </div>
    </>
    )
}

export default ReceOrder
