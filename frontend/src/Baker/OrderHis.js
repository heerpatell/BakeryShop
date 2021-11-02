import React,{useState,useEffect} from 'react'
import Sidebar from '../Component/Sidebar';
import './ordHistory.css'
import { useHistory } from 'react-router';
import axios from 'axios';
import './receOrder.css'

function OrderHis() {
    const [showNav,setShowNav] = useState(true);
    const [fetch,setFetch] = useState([])
    const [cartItem,setCartItem] = useState([])

    const history = useHistory()
    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/baker/orderhistory')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

     const getOrderData = () =>{
        const resp = axios.get("http://localhost:5001/order/bakerorders",{
            withCredentials:true
        })
        .then(async(res)=>{
            try{
                const resp = await res.data.orderData
                // console.log("d",resp[0])
                setFetch(resp)
                setCartItem(resp[0].cartItems)
                console.log("f",fetch)
            }catch(e){
                console.log("error",e)
            }
        })
    }

    useEffect(() => {
        verifyUser()
        getOrderData()
    }, [])

    return (
    <>
    <div>
        {/* <header className="bakerHeader">
            <GiHamburgerMenu size={30} onClick={displayNav}/>
        </header> */}
        <Sidebar  show={showNav}/> 
        <div className="rOrderHead"><h3>Order History</h3></div>

        {/* <div className="ordHisList">
            <div className="ordHisBox">
                <div className="ordHisName">Order Id: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Customer Name: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Product Name: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Quantity: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Price: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Payment Type: <span className="ordHisdVal">123</span></div>
                <div className="ordHisName">Date: <span className="ordHisdVal">123</span></div>
            </div> 
        </div> */}

        <div className="recOrdList">
            {
                fetch.map((item,ind)=>{
                    return(
                        item.ostatus === 'done'?
                            <div className="recOrdBox">
                                <div className="recOrdName">Order Id: <span className="recOrdVal">{item._id}</span></div>
                                <div className="recOrdName">Customer Id: <span className="recOrdVal">{item.userId}</span></div>

                                <hr className="lineBetweenOrder" color="#00ff00"/>
                                <div className="rowHeadingBaker">
                                    <div>Product Name</div>
                                    <div>Quantity</div>
                                    <div>Price</div>
                                </div>
                                <hr className="lineBetweenOrder" color="#00ff00"/>

                                    {cartItem.map((item,ind)=>{
                                        return(
                                            <div className="rowItemBaker">
                                                <div>{item.iname}</div>
                                                <div>{item.quantity}</div>
                                                <div>{item.price}</div>
                                            </div>   
                                        )               
                                    })}
                        
                                <hr className="lineBetweenOrder" color="#00ff00"/>

                                <div className="recOrdName">Total Price: <span className="recOrdVal">{item.totalPrice}</span></div>
                                <div className="recOrdName">Order Date: <span className="recOrdVal">{item.orderDate}</span></div>
                                <div className="recOrdName">Payment Type: <span className="recOrdVal">COD</span></div>
                            </div>
                        :<div className="rOrderHead">"You got no order history"</div>              
                    )
                })
            }

        </div>


    </div>
    </>
    )
}

export default OrderHis
