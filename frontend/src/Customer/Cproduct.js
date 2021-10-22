import React,{useState,useEffect} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'
import './cproduct.css'
import axios from 'axios'
import { useHistory } from 'react-router'
import {FaCartPlus} from 'react-icons/fa'
import {RiShoppingCart2Line} from 'react-icons/ri'

function Cproduct() {
    const [showNav,setShowNav]= useState(true)
    const [fetchData,setFetchData] = useState([])
    const [add,setAdd] = useState(0)
    const [cartAppear,setCartAppear] = useState([true])

    const history = useHistory()
    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/customer/product')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

    const fetchItem =async () =>{
        await axios.get("http://localhost:5001/product/getitems",{
            withCredentials:true
        })
        .then(async(res)=>{
            setFetchData(await res.data.item)

            console.log("fetchdata :",fetchData)
        })
    }

    const fetchTotalCart =async () => {
        await axios.get("http://localhost:5001/cart/getcartnum",{
            withCredentials:true
        })
        .then(async(res)=>{
            console.log("res",res.data.cartnum)
            setAdd(res.data.cartnum)
        })
    }

    useEffect(() => {
        verifyUser();
        fetchItem();
        fetchTotalCart();
    }, [])

    const addCart = async (id) =>{
        try{
           const cartData = await{
               id
           } 
           axios.post("http://localhost:5001/cart/add",cartData,{
               withCredentials:true
           })
           .then((res)=>{
               console.log(res)
           })
           .catch((e)=>{
               console.log("error",e)
           })
           setCartAppear(false)
           alert("Item Added!!")
        }catch(e){
            console.log(e)
        }
        setAdd(add+1)
    }

    return (
    <>
    <div>
        <SidebarCustomer show={showNav}/>
        <div className="cProductMain">
            <div className="CustProductHeading">
                <div className="bakerProListTitle">Product List </div>
                <div className="bakerProductCart"><RiShoppingCart2Line size={27} color={"#012443"}/><span className="CustAddItem">{add}</span></div>
            </div>

            <div className="cProRow">
                {
                fetchData.map((item,ind)=>{
                    return(
                       <div className="cProductBox">
                            <div className="cItemContent">
                                <div><img className="cItemImage" src={require(`../uploads/${item.iphoto}`).default} alt="img"/></div>
                                {

                                    cartAppear ?
                                    <div className="cAddToCart">
                                        <FaCartPlus size={23} color="#FDD2BF" onClick={(id)=>addCart(item._id)}/>
                                    </div>
                                    :
                                    <div className="cAddToCartDisable">
                                        <FaCartPlus size={23} color="grey" onClick={(id)=>addCart(item._id)}/>
                                    </div>
                                }

                                <div className="cItemDetails">Category Name : <span className="cItemSpan">{item.cname}</span></div>
                                <div className="cItemDetails">Item Name : <span className="cItemSpan">{item.iname}</span></div>
                                <div className="cItemDetails">Piece per box : <span className="cItemSpan">{item.quantity}</span></div>
                                <div className="cItemDetails">Available : <span className="cItemSpan">{item.avail}</span></div>
                                <div className="cItemLastDetails">Price : <span className="cItemSpanLast">{item.price}</span></div>
                            </div>
                            {/* {console.log("hi",fetchData)} */}
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </>
    )
}

export default Cproduct
