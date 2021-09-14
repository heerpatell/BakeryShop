import React,{useState} from 'react'
import './contact.css'
import Navbar from '../../Component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button'
import Footer from '../../Component/Footer';
import axios from 'axios'

function Contact() {
    const [input, setInput] = useState({
        name:'',
        email:'',
        sub:'',
        msg:''
    })

    function handledChange(e){
        const {name,value} = e.target ;
        setInput(prevInput=>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(e){
        e.preventDefault(); 
        const newContact= {
            name:input.name,
            email:input.email,
            sub:input.sub,
            msg:input.msg
        }
        axios.post('http://localhost:5001/contactapi/create',newContact)
    }

    return (
        <>
        <div className="contactDiv">
            <Navbar/>
            <div className="outer-part">
                <form method="post" action="/contact">
                    <div className="row-1">
                        <div>
                            <label className="mt-3 colo">Your Name :</label><br/>
                            <input onChange={handledChange} value={input.name} type="name" name="name"></input>
                        </div>
                        <div>
                            <label className="mt-3">Your Email :</label><br/>
                            <input onChange={handledChange} value={input.email} type="name" name="email"></input>
                        </div>

                    </div>
                    <div className="row-2">
                        <div>
                            <label className="mt-1">Subject :</label><br/>
                            <input onChange={handledChange} value={input.sub} type="text" name="sub" size="54"></input>
                        </div>
                    </div>
                    <div className="row-3">
                        <div>
                            <label className="mt-1">Message :</label><br/>
                            <textarea onChange={handledChange} value={input.msg} type="text" name="msg" ></textarea>
                        </div>
                    </div>
                    <div className="btn">
                        <Button onClick={handleClick} variant="outlined" color="primary" >SEND</Button>
                    </div>
                </form>
            </div>  
        </div>

        <Footer/>
        </>
    )
}

export default Contact
