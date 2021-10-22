import React,{useState,useEffect} from 'react'
import SidebarCustomer from '../Component/SidebarCustomer'
import axios from 'axios'
import { useHistory } from 'react-router'

function Cprofile() {

    const [inp,setInp] = useState({
        name:"",
        email:"",
        role:"",
        city:"",
        area:"",
        cont:""
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
                history.push('/customer/profile')
            }else if(res.data.message==="Token problem"){
                history.push('/signin')
            }    
       })
     } 

     const custInfo = async () =>{
        await axios.get('http://localhost:5001/profile/customerget',{
            withCredentials:true
        })
        .then((res)=>{
            setInp({
                name:res.data.name,
                email:res.data.email,
                role:res.data.role,
                city:res.data.city,
                area:res.data.area,
                cont:res.data.cont
            })
            console.log(inp)
        })
     }
    
     useEffect(() => { 
        verifyUser();
        custInfo();
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
            area:inp.area
        }
        console.log("p",profileData)
        axios.post("http://localhost:5001/profile/customerpost",profileData,{
            withCredentials:true
        })
        .then(res=>{
            console.log(res)
            alert(res.data.message)
        })
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
                        <label className="proLab">Role*</label><br/>
                        <input type="text"
                        className="proIn"
                        name="role"
                        value={inp.role}
                        onChange={handleInp}
                        />
                    </div>   
                    <div className="proCol">
                        <label className="proLab">Name*</label><br/>
                        <input type="text"
                        className="proIn"
                        name="uname"
                        value={inp.name}
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
                        name="cont"
                        value={inp.cont}
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
                        value={inp.area}
                        onChange={handleInp}
                        />
                    </div>
                    <div className="proCol">
                        <label className="proLab">City*</label><br/>
                        <input type="text"
                        className="proIn"
                        name="city"
                        value={inp.city}
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
