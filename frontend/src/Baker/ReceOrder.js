import React,{useState,useEffect} from 'react'
import Sidebar from '../Component/Sidebar';
import './receOrder.css'
import axios from 'axios';
import { useHistory } from 'react-router';

function ReceOrder() {
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
                history.push('/baker/recentorder')
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
                // console.log(res.data.orderData)
                console.log("d",resp)
                setFetch(resp)
                // setCartItem(resp[0].cartItems)
                console.log("f",fetch)
                // console.log("cartitem",cartItem)
            }catch(e){
                console.log("error",e)
            }
        })
    }
     
    useEffect(() => {
        verifyUser();
        getOrderData()
    }, [])

    const bakerOrderDone = async (id) =>{
        const orderId = {
            id
        }
        // console.log(id)
        await axios.post('http://localhost:5001/order/orderdone',orderId,{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message === 'order done'){
                alert("order done!")
            }
            // console.log(res)
        })
        .catch((e)=>{
            console.log("error",e)
        })
    }

    return (
    <>
    <div>
        {/* <header className="bakerHeader">
            <GiHamburgerMenu size={30} onClick={displayNav}/>
        </header> */}
        <Sidebar  show={showNav}/>  
        <div className="rOrderHead"><h3>Recent Orders</h3></div>  

        <div className="recOrdList">
            {
                fetch.map((item,ind)=>{
                    return(
                        item.ostatus === 'pending'?
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

                                    {item.cartItems.map((item,ind)=>{
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
                                <div className="recOrdName">Payment Type: <span className="recOrdVal">COD</span></div>
                                <button className="recOrdDone" onClick={()=>bakerOrderDone(item._id)}>Order Done</button>
                            </div>
                        :<div className="rOrderHead">"You got no recent order"</div>              
                    )
                })
            }

        </div>

    </div>
    </>
    )
}

export default ReceOrder
