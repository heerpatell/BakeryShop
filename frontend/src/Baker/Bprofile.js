import React,{useState,useEffect} from 'react'
import './bprofile.css'
import Sidebar from '../Component/Sidebar'
import './bprofile.css'
import axios from 'axios'
import { useHistory } from 'react-router'

function Bprofile() {
    const [inp,setInp] = useState({
        bname:"",
        uname:"",
        sellProduct:"",
        availTime:"",
        email:"",
        role:"",
        city:"",
        area:"",
        cont:"",
        socialmedia:""
    })
    let history = useHistory()

    const verifyUser = async () =>{
        const response = axios.get('http://localhost:5001/auth/verify',{
            withCredentials:true
        })
        .then((res)=>{
            if(res.data.message==="No token provided"){
                history.push('/signin')
            }else if(res.data.message==="Token issued"){
                history.push('/baker/profile')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

     const bakerInfo = async () =>{
        await axios.get('http://localhost:5001/profile/bakerget',{
            withCredentials:true
        })
        .then((res)=>{
            setInp({
                bname:res.data.bname,
                uname:res.data.uname,
                email:res.data.email,
                role:res.data.role,
                city:res.data.city,
                sellProduct:res.data.sellProduct,
                availTime:res.data.availTime,
                area:res.data.area,
                cont:res.data.cont,
                socialmedia:res.data.socialmedia
            })
            console.log(inp)
        })
     }

    useEffect(() => {
        verifyUser();
        bakerInfo();
    }, [])


    const handleInp = (e) =>{
        const {name,value} = e.target;
        setInp({...inp,[name]:value});
    }

    const logOutClicked = () =>{
        console.log("clicked")
        try{
            axios.get("http://localhost:5001/auth/logout",{
                withCredentials:true
            })
            .then(res=>{
            console.log(res)
            alert(res.data.message)
            history.push('/signin',{
                replace:true
            })
            if(res.status!=200){
                console.log("error occured in logout",error)       
                const error = new Error(res.error)
            }
            })
        }
        catch(e){
            console.log("error: ",e)
        }
    }

    const handleSub =(e)=>{
        e.preventDefault()
        const profileData = {
            cont:inp.cont,
            city:inp.city,
            area:inp.area,
            bname:inp.bname,
            uname:inp.uname,
            socialmedia:inp.socialmedia,
            availTime:inp.availTime,
            sellProduct:inp.sellProduct
        }
        console.log("p",profileData)
        axios.post("http://localhost:5001/profile/bakerpost",profileData,{
            withCredentials:true
        })
        .then(res=>{
            console.log(res)
            alert(res.data.message)
        })
    }

    const handlePhoto = (e) => {
        setInp({...inp, iphoto: e.target.files[0]});
    }

    const [showNav,setShowNav] = useState(true);
    return (
    <>
    <Sidebar  show={showNav}/>   

    <div className="bprofile">

        <div className="logOutRow">
            <button className="logOutBtn" onClick={logOutClicked}>Log out</button>
        </div>    
        <h3 className="proDet">Profile Details</h3>
        
        <form method="post" action="/baker/profile">
            <div className="proRow">
                <div className="proCol">
                    <label className="proLab">Bakery Name*</label><br/>
                    <input type="text"
                    className="proIn"
                    name="bname"
                    value={inp.bname}
                    onChange={handleInp}
                    />
                </div>   
                <div className="proCol">
                    <label className="proLab">User Name*</label><br/>
                    <input type="text"
                    className="proIn"
                    name="uname"
                    value={inp.uname}
                    onChange={handleInp}
                    />
                </div>
            </div>   

            <div className="proRow">
                <div className="proCol">
                    <label className="proLab">What do you Sell?*</label><br/>
                    <textarea type="text"
                    className="proIn"
                    name="sellProduct"
                    value={inp.sellProduct}
                    onChange={handleInp}
                    />
                </div>
                <div className="proCol">
                    <label className="proLab">Available Timing*</label><br/>
                    <input type="text"
                    className="proIn"
                    name="availTime"
                    value={inp.availTime}
                    onChange={handleInp}
                    />
                </div>   
            </div>

            <div className="proRow">
            <div className="proCol">
                    <label className="proLab">Email*</label><br/>
                    <input type="email"
                    className="proIn"
                    name="email"
                    value={inp.email}
                    onChange={handleInp}
                    />
                </div>
                <div className="proCol">
                    <label className="proLab">Role*</label><br/>
                    <input type="text"
                    className="proIn"
                    name="role"
                    value={inp.role}
                    onChange={handleInp}
                    />
                </div>   
            </div>

            <div className="proRow">
            <div className="proCol">
                    <label className="proLab">City*</label><br/>
                    <input type="text"
                    className="proIn"
                    name="city"
                    value={inp.city}
                    onChange={handleInp}
                    />
                </div>
                <div className="proCol">
                    <label className="proLab">Area*</label><br/>
                    <input type="text"
                    className="proIn"
                    name="area"
                    value={inp.area}
                    onChange={handleInp}
                    />
                </div>   
            </div>

            <div className="proRow">
            <div className="proCol">
                    <label className="proLab">Contact*</label><br/>
                    <input type="text"
                    className="proIn"
                    name="cont"
                    value={inp.cont}
                    onChange={handleInp}
                    />
                </div>
                <div className="proCol">
                    <label className="proLab">Social Media </label><br/>
                    <input type="text"
                    className="proIn"
                    name="socialmedia"
                    value={inp.socialmedia}
                    onChange={handleInp}
                    />
                </div>   
            </div>

            <div className="proBtnRow"> 
                <button className="catSaveBtn" onClick={handleSub}>Save</button>
            </div>
        </form>
    </div>
    </>
    )
}

export default Bprofile
