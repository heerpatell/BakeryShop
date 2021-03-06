import React,{useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import './sign.css'
import axios from 'axios'

function SignIn() {
    let history = useHistory()
   
    // console.log("isAuth",isAuth)

    const [user,setUser] = useState({
        email:"",pswd:""
    })
    const handleInp = (e) =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
    }
    const signSubmit =async (e) =>{
        // e.preventDefault();
        const userData=await{
            email:user.email,
            pswd:user.pswd
        }
        // axios.defaults.withCredentials = true;
        axios.post('http://localhost:5001/auth/signin',userData,{
            withCredentials:true
        })
        .then(res => {      
            try{
                if(res.data.message==='Login succesfully'){
                    alert(res.data.message)
                    if(res.data.userToken==='Customer'){
                        history.push('/customer/product')
                    }else if(res.data.userToken==="Baker"){
                        history.push('/baker/product')
                    }else if(res.data.userToken==="Admin"){
                        history.push('/adminbakercontact')
                    }
                }else{
                    if(res.data.error){
                        alert(res.data.error)
                    }
                    res.data.error ? history.push('/signin') :alert(res.data.message)  
                }
            }catch(e){
                console.log("error",e)
            }
        })
    } 
    return (
    <>
    <div className="sign_main">
        <div className="sign_left"></div>

        <div className="sign_right">
            <div className="switchSign">Don't have an account? <span className="SignSpan"><Link to="/signup">Sign up</Link></span></div>
            <h3 className="headdTag">Sign in</h3>
            <form method="get" action="/signin">
                <div className="inCol">
                    <label className="inLabel">Email </label>
                    <input type="email" 
                    placeholder="Enter Email" 
                    className="inInp" 
                    name="email"
                    value={user.email}
                    onChange={handleInp}></input> 
                </div>   
                <div className="inCol">
                    <label className="inLabel">Password </label>
                    <input type="password" 
                    placeholder="Enter Password" 
                    className="inInp" 
                    name="pswd"
                    value={user.pswd}
                    onChange={handleInp}></input>
                </div>
                <div className="fpswd">Forgot Password ?</div>
            </form>
            <button type="submit" className="sBtn" onClick={signSubmit}>Sign in</button>
        </div>
    
    </div>    
    </>
    )
}

export default SignIn
