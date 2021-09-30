import React,{useState,useEffect} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'
import axios from 'axios'
import { useHistory } from 'react-router'

function Cprofile() {

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
                history.push('/customer')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

     useEffect(() => {
        verifyUser();
    }, [])

    const handleInp = (e) =>{
        const {name,value} = e.target;
        setInp({...inp,[name]:value});
    }

    const logOutClicked = () =>{
        console.log("clicked")
        axios.get("http://localhost:5001/auth/logout")
        .then(res=>{
            history.push('/sigin',{
                replace:true
            })
            if(res.status!=200){
                const error = new Error(res.error)
                throw error       
            }
        })
        .catch((e)=>{
            console.log("error: ",e)
        })
    }

    const handleSub =(e)=>{
        e.preventDefault()
        console.log("her")
        const profileData = {
            bname:inp.bname,
            sellProduct:inp.sellProduct,
            availTime:inp.availTime,
            city:inp.city,
            area:inp.area,
            cont:inp.cont,
            socialmedia:inp.socialmedia
        }
        // axios.post("http://localhost:5001/baker/profilepost",profileData)
        // .then(res=>{
        //     console.log(res)
        //     alert(res.data.message)
        // })
    }

    const [showNav,setShowNav]= useState(true)
    return (
    <>
        <SidebarCustomer show={showNav}/>   

        <div className="bprofile">
            <div className="bphoto">
                photo
            </div>

            <button className="logoutbtn" onClick={logOutClicked}>Log out </button>
            
            <br/><br/>  
            <h3 className="proDet">Profile Details</h3>
            
            <form method="post" action="/baker/profile">
                <div className="proRow">
                    <div className="proCol">
                        <label className="proLab">Name*</label><br/>
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
                        <label className="proLab">Email*</label><br/>
                        <input type="email"
                        className="proIn"
                        name="email"
                        value={inp.email}
                        onChange={handleInp}
                        />
                    </div>
                    <div className="proCol">
                        <label className="proLab">Contact*</label><br/>
                        <input type="text"
                        className="proIn"
                        name="contact"
                        value={inp.role}
                        onChange={handleInp}
                        />
                    </div>   
                </div>

                <div className="proRow">
                <div className="proCol">
                        <label className="proLab">Area*</label><br/>
                        <input type="text"
                        className="proIn"
                        name="area"
                        value={inp.city}
                        onChange={handleInp}
                        />
                    </div>
                    <div className="proCol">
                        <label className="proLab">City*</label><br/>
                        <input type="text"
                        className="proIn"
                        name="city"
                        value={inp.area}
                        onChange={handleInp}
                        />
                    </div>   
                </div>

                <div className="proBtnRow"> 
                    <button className="proSaveBtn" onClick={handleSub}>Save</button>
                </div>
            </form>
        </div>
    </>
    )
}

export default Cprofile
