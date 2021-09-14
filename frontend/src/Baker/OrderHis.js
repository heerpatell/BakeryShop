import React,{useState} from 'react'
import Sidebar from '../Component/Sidebar';
import './ordHistory.css'

function OrderHis() {
    const [showNav,setShowNav] = useState(true);
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
