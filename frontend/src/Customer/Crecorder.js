import React,{useState,useEffect} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'
import { useHistory } from 'react-router'
import axios from 'axios'
import './crecorder.css'
import {AiOutlineDelete,AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

function Crecorder() {
    const [showNav,setShowNav]= useState(true)
    const [fetchData,setFetchData] = useState([])
    var [quantity,setQuantity] =useState([])
    const [totalPrice,setTotalPrice] = useState(0)

    let history = useHistory()

    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/customer/recentorder')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

     const getCartDetails = () =>{
         const res = axios.get("http://localhost:5001/cart/get",{
             withCredentials:true
         })
         .then((res)=>{
            const cartData = res.data.item[0].cartItems;      
            setFetchData(cartData)
            console.log("res",fetchData)
        })
        .catch((e)=>{
            console.log("error",e)
        })
     }

     const getTotalVal = () =>{
        const res = axios.get("http://localhost:5001/cart/gettotalval",{
            withCredentials:true
        })
        .then((res)=>{
            // console.log("Price",res.data.totalPrice)
            setTotalPrice(res.data.totalPrice)
        })
     }

     useEffect(() => {
        verifyUser();
        getCartDetails()
        getTotalVal()
    }, [])
    
    const addClicked =async (id,quantity) => {
        
        setQuantity(quantity+1)
        // console.log(quantity,"q")
        const quantityNum = {
            id,quantity
        }

        await axios.post("http://localhost:5001/cart/quantityadd",quantityNum,{
            withCredentials:true
        })
        .then((res)=>{
            console.log(res.data)
        })
    }

    const minusClicked = async (id,quantity) => {
        setQuantity(quantity-1)
        // console.log(quantity,"q")
        const quantityNum = {
            id,quantity
        }

        await axios.post("http://localhost:5001/cart/quantityminus",quantityNum,{
            withCredentials:true
        })
        .then((res)=>{
            console.log(res.data)
        })
    }

    const deleteCart = async (id) =>{
        console.log(id)
        alert("Item Deleted!")
        const deleteCartItem = {
            id
        }
        await axios.post("http://localhost:5001/cart/deletecart",deleteCartItem,{
            withCredentials:true
        })
        .then((res)=>{
            console.log("item deleted")
        })
        .catch((e)=>{
            console.log("error",e)
        })
    }

    return (
    <>
    <div>
        <SidebarCustomer show={showNav}/> 
        <div className="custOrderMain">
            <div className="custHeadMain">Your Cart Items</div>
                {(fetchData.length=== 0) && (<div>Select something from product list !!</div>)}
                {
                    fetchData.map((item,ind)=>{
                        console.log("q",fetchData);
                        return(
                        <div className="custHeadMainBox">
                            <div className="custCartFirstRow">
                                <AiOutlineDelete color="#FDD2BF" size={27} className="delIconCart" onClick={()=>deleteCart(item._id)}/>
                            </div>

                            <div className="custCartRow">
                                <div className="custCartCol">
                                    <div><img className="custCartPhoto" src={require(`../uploads/${item.iphoto}`).default} alt="img"/></div>
                                </div>

                                <div className="custCartCol">
                                    <div className="custCartPrice">Name</div>
                                    <div className="custPriceVal">{item.iname}</div>
                                </div>

                                <div className="custCartCol">
                                    <div className="custCartQuantity">Quantity</div>
                                    <div className="custCartAdd">
                                        <div className="custCartOption"  onClick={()=>minusClicked(item._id,item.quantity)}><AiOutlineMinus/></div>
                                        <div className="custCartValue">{item.quantity>=1 ? item.quantity :1}</div>
                                        <div className="custCartOption" onClick={()=>addClicked(item._id,item.quantity)}><AiOutlinePlus /></div>
                                    </div>
                                </div>
                            {/* {console.log("ff",fetchData[0].quantity)} */}
                                <div className="custCartCol">
                                    <div className="custCartPrice">Price</div>
                                    <div className="custPriceVal">{item.price}</div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

                <div className="cartTotalPriceRow">
                    <div className="cartTotal">Cart Total: <span className="catTotalVal">{totalPrice}</span> </div>
                </div>
            <div className="custHeadMain">Your order List</div>
        
        
        </div>
    </div>
    </>
    )
}

export default Crecorder
