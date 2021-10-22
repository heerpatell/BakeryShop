import React,{useEffect,useState} from 'react'
import { useParams,useHistory } from 'react-router'
import axios from 'axios'
import Sidebar from '../Component/Sidebar'
import './productItem.css'
import {AiOutlineDelete} from 'react-icons/ai'
import {VscEdit} from 'react-icons/vsc'

function ProductItem() {

    const {categoryname} = useParams()   
    const [showNav,setShowNav] = useState(true)
    const [inp,setInp] = useState({
        cname:categoryname,iname:"",iphoto:"",quantity:"",price:"",avail:""
    })
    const [fetchData,setFetchData] = useState([])
    const [disableInp,setDisableInp] = useState(true)
    const [edit,setEdit] = useState(false)

    const history = useHistory()
    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push(`/baker/category/${categoryname}`)
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

     const getProductDetails = async () =>{
        await axios.get("http://localhost:5001/product/get",{
            withCredentials:true
        })
        .then(async(res)=>{
            setFetchData(await res.data.item)

            console.log("fetchdata :",fetchData)
        })
     }

    useEffect(() => {
        verifyUser();
        getProductDetails();
    }, [])

    var displayNav = ()=>{
        setShowNav(!showNav)
    }

    const handleInp = (e) =>{
        const {name,value} = e.target;
        setInp({...inp,[name]:value});
    }

    const handlEdit = (e) =>{
        // const {iname,quantity,avail,price} = fetchData;
        
    }

    const handleSub = (e) =>{
        e.preventDefault()
        const formData = new FormData();

        formData.append('cname', inp.cname);
        formData.append('iname', inp.iname);
        formData.append('iphoto', inp.iphoto);
        formData.append('quantity', inp.quantity);
        formData.append('price', inp.price);
        formData.append('avail', inp.avail);
    
        setInp({iname:"",iphoto:"",quantity:"",price:"",avail:""})
        // console.log("data",formData)
        axios.post("http://localhost:5001/product/add",formData,{
            withCredentials:true
        })
        .then(res=>{
            console.log("r",res)
            alert(res.data.message)
        })
    }

    const handlePhoto = (e) => {
        setInp({...inp, iphoto: e.target.files[0]});
    }

    const delBakerItem = (id) => {
        axios.delete(`http://localhost:5001/product/deleteItem/${id}`,{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message="success"){
                console.log("Item Deleted Successfully")
            }
        })
    }
    const editBakerItem = () =>{
        console.log("edit")
        setEdit(!edit)
        edit ? setDisableInp(true) :  setDisableInp(false)
    }   

    const editClicked = (id) =>{

        console.log("'id",id)
        
        // axios.put(`http://localhost:5001/product/editItem/${id}`,updateData,{
        //     withCredentials:true
        // })
        // .then((res)=>{
        //     if(res.data.message="success"){
        //         console.log("Item Edited Successfully")
        //     }
        // })
    }
    return (
    <>
    <Sidebar show={showNav} />
    <div className="bakeritemmain">
        <h4>Your Category : <span className="spnBakerProList"> {categoryname} </span></h4>
        <div className="bakeItemBox">
            <form onSubmit={handleSub} encType="multipart/form-data" method="post">
            <div className="bakerItemRow">
                <div className="bakerItemCol">
                    <label className="bakerItemLab">Category name</label><br/>
                    <input type="cname"
                    className="bakerItemIn"
                    name="email"
                    value={categoryname}
                    onChange={handleInp}
                    />
                </div>
                <div className="bakerItemCol">
                    <label className="bakerItemLab">Item name*</label><br/>
                    <input type="text"
                    className="bakerItemIn"
                    name="iname"
                    value={inp.iname}
                    onChange={handleInp}
                   />
                </div>   
            </div>

            <div className="bakerItemRow">
                    <div className="bakerItemCol">
                        <label className="bakerItemLab">Upload Item photo*</label><br/>
                        <input type="file"
                        name="iphoto"
                        accept=".png, .jpg, .jpeg"
                        onChange={handlePhoto}
                        />
                    </div>   
                    <div className="bakerItemCol">
                        <label className="bakerItemLab">Quantity*</label><br/>
                        <input type="number"
                        className="bakerItemIn"
                        name="quantity"
                        value={inp.quantity}
                        onChange={handleInp}
                        />
                    </div>   
            </div>

            <div className="bakerItemRow">
                <div className="bakerItemCol">
                    <label className="bakerItemLab">Price*</label><br/>
                    <input type="number"
                    className="bakerItemIn"
                    name="price"
                    value={inp.price}
                    onChange={handleInp}
                    />
                </div>   
                <div className="bakerItemCol">
                    <label className="bakerItemLab">Available(Yes/No)*</label><br/>
                    <input type="text"
                    className="bakerItemIn"
                    name="avail"
                    value={inp.avail}
                    onChange={handleInp}
                    />
                </div>   
            </div>
            <div className="bakerItemRow">
            <div className="productSaveBtn" onClick={handleSub}>Add Product</div>
            </div>

            </form>    
        </div> 

        <div className="bakerProListTitle">Your Product List  </div>
        {
            fetchData.map((item,ind)=>{
                return(
                <div className="productListBox">
                    <div className="bakerProductImg">
                        <img src={require(`../uploads/${item.iphoto}`).default} className="itemPhotoBaker" alt={item.iname}/>
                    </div>
                    <div className="bakerProductItem">
                        <div className="bakerDelProduct" onClick={()=>editBakerItem()}><VscEdit size={26} /></div>
                        <div className="bakerDelProduct " onClick={()=>delBakerItem(item._id)}><AiOutlineDelete size={26}/></div>        
                        <div className="bItemRow">
                            <div>Item Name : 
                                <input type="text" 
                                value={item.iname} 
                                disabled={disableInp}
                                name="iname"
                                onChange={handlEdit}
                                className="bakerListInput"/>
                            </div>
                            <div>Quantity :  
                                <input type="number" 
                                name="quantity"
                                value={item.quantity} 
                                disabled={disableInp}
                                onChange={handleInp}
                                className="bakerListInput"/>
                            </div>
                        </div>    
                        <br/>
                        <div className="bItemRow">
                            <div>Available :  
                                <input type="text" 
                                name="avail"
                                value={item.avail}
                                onChange={handleInp}
                                disabled={disableInp}
                                className="bakerListInput"/>
                            </div>
                            <div>Price :    
                                <input type="number" 
                                name="price"
                                value={item.price} 
                                onChange={handleInp}
                                disabled={disableInp}
                                className="bakerListInput"/>
                            </div>
                        </div>
                        {edit?
                            <div className="bItemRowEdit">
                                <div className="productEditBtn" onClick={()=>editClicked(item._id)}>Edit </div>
                            </div>
                            :<div></div>
                        }  
                    </div>    
                </div>
                )
            })                
        }
    
    </div>
    </>
    )
}

export default ProductItem
