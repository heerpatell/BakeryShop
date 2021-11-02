import React,{useState,useEffect} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'
import './cprofile.css'
import axios from 'axios'
import { useHistory } from 'react-router'
import './cordhistory.css'
import './crecorder.css'
import {AiOutlinePlus} from 'react-icons/ai'

function Cordhistory() {
    const [showNav,setShowNav]= useState(true)
    const [fetch,setFetch] = useState([])
    // const [cartItem,setCartItem] = useState([])

    const history = useHistory()
    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/customer/orderhistory')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

    const getData = async () =>{
        try{
            await axios.get('http://localhost:5001/order/getorderlist',{
                withCredentials:true
            })
            .then((res)=>{

                // const cartData = res.data.cartDetails[0].cartItems
                setFetch(res.data.cartDetails)
                // setCartItem(cartData)
                // console.log("cartItem",cartItem)
            })
            .catch((e)=>{
                console.log("error",e)
            })
        }catch(e){
            console.log("error",e)
        }
    } 

    useEffect(() => {
        verifyUser();
        getData()
    }, [])

    return (
    <>
    <div>
    <SidebarCustomer show={showNav}/>
        <div className="custOrderHstory">
            <div className="custOrderHistoryMain">Order History</div>
                {
                    fetch.map((item,ind)=>{
                        return(
                            <div className="orderListBox">
                                <div className="cOrderListRowHeading">
                                    <div>
                                        Name
                                    </div>
                                    <div>
                                        Quantity
                                    </div>
                                    <div>
                                        Price
                                    </div>
                                </div>
                                <hr className="lineBetweenOrder" color="#00ff00"/>
                                
                                {
                                    item.cartItems.map((item,ind)=>{

                                        return(
                                            <div className="cOrderListRow">
                                                <div>
                                                    {item.iname}
                                                </div>
                                                <div>
                                                    {item.quantity}
                                                </div>
                                                <div>
                                                    {item.price}
                                                </div>
                                            </div>        
                                        )
                                    })
                                }
                                <hr className="lineBetweenOrder" color="#00ff00"/>

                                <div className="cTotalCostOrderList">
                                <div className="cOrderListCost"> Total Amount :</div>
                                <div className="cOrderListCostDetail">{item.totalPrice}</div>
                                </div>
                                <hr className="lineBetweenOrder" color="#00ff00"/>

                                <div className="cOrderListLastRow">
                                    <div className="cOrderStatus">Status :
                                        <span className="cOrderStatusDetail">
                                            {item.ostatus}
                                        </span>
                                    </div>
                                </div>

                                <div className="cOrderListLastRow">
                                    <div className="cOrderDateDetail">Date :
                                        <span className="cOrderStatusDetail">
                                            {item.orderDate}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            {/* <div className="orderListBox">
                <div className="cOrderListRowHeading">
                    <div>
                        Name
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Price
                    </div>
                </div>
                <hr className="lineBetweenOrder" color="#00ff00"/>
                
                <div className="cOrderListRow">
                    <div>
                        Name
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Price
                    </div>
                </div>
                <hr className="lineBetweenOrder" color="#00ff00"/>

                <div className="cTotalCostOrderList">
                   <div className="cOrderListCost"> Total Amount :</div>
                   <div className="cOrderListCostDetail">100</div>
                </div>
                <hr className="lineBetweenOrder" color="#00ff00"/>

                <div className="cOrderListLastRow">
                    <div className="cOrderStatus">Status :
                        <span className="cOrderStatusDetail">
                            Done
                        </span>
                    </div>
                </div>

                <div className="cOrderListLastRow">
                    <div className="cOrderStatus">Date :
                        <span className="cOrderStatusDetail">
                            Date
                        </span>
                    </div>
                </div>

            </div> */}

        </div>

    </div>
    </>
    )
}

export default Cordhistory
