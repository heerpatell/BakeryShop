import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './sign.css'
import axios from 'axios'

function Signup() {
    const [user,setUser]=useState({
        name:"",uname:"",email:"",pswd:"",stoken:"",scheck:""
    })
    const handleInp = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
    const signData =async (e) =>{
        e.preventDefault(); //prevents automatic reload
        const newContact= {
            name:user.name,
            uname:user.uname,
            email:user.email,
            pswd:user.pswd,
            stoken:user.stoken,
            scheck:user.scheck
        }
        axios.post('http://localhost:5000/auth/register',newContact)
    }

    return (
    <>
    <div className="sign_main">
        <div className="sign_left"></div>

        <div className="sign_right">
            <div className="switchSign">Don't have an account? <span className="SignSpan"><Link to="/signin">Sign In</Link></span></div>
            <h3 className="headdTagUp">Sign up</h3>
            <form method="post" action="/signup"> 
                <div className="upRow">
                    <div className="upCol">
                        <label className="inLabel">Name </label>
                        <input type="email"
                        placeholder="Name" 
                        className="upInpR" 
                        name="name" 
                        value={user.name}
                        onChange={handleInp}></input>
                    </div>   
                    <div className="upCol">   
                        <label className="inLabel">Username </label>
                        <input type="email" 
                        placeholder ="Username" 
                        className="upInpR" 
                        name="uname" 
                        value={user.uname}
                        onChange={handleInp}></input>
                    </div>    
                </div>   
                <div className="upRow">
                    <div className="upCol">
                        <label className="inLabel">Email </label>
                        <input type="email" 
                        placeholder="Email" 
                        className="upInp"
                        name="email" 
                        value={user.email}
                        onChange={handleInp}></input>   
                    </div>
                </div>        
                <div className="upRow">
                    <div className="upCol">
                        <label className="inLabel">Password </label>
                        <input type="password" 
                        placeholder="Password"
                        className="upInp" 
                        name="pswd" 
                        value={user.pswd}
                        onChange={handleInp}></input>
                    </div>
                </div>
                <div className="upCol">
                    <div onChange={handleInp}>
                        <div className="upRow ">
                            <input type="radio" 
                            className="checkSignUp" 
                            name="stoken"  
                            value={user.stoken}></input>Customer
                        </div>
                        <div className="upRow ">
                            <input type="radio" 
                            className="checkSignUp" 
                            name="stoken" 
                            value={user.stoken}></input>Baker
                        </div>
                    </div>   
                </div>
                <div className="upRow">
                    <input type="checkbox"
                    id="signCheck" 
                    className="checkSignUp" 
                    name="scheck" 
                    value={user.scheck}
                    onChange={handleInp}></input>
                    <label for="signCheck" >Creating an account means you’re okay with our Terms of Service, Privacy Policy.     </label>
                </div>
                
            </form>
            <button type="submit" className="sBtn" onClick={signData}>Sign up</button>
        </div>
    
    </div>
    </>
    )
}

export default Signup
