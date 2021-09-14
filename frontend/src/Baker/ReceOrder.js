import React,{useState} from 'react'
import Sidebar from '../Component/Sidebar';
import './receOrder.css'

function ReceOrder() {
    const [showNav,setShowNav] = useState(true);
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
