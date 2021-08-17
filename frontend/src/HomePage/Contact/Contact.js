import React from 'react'
import './contact.css'
import Navbar from '../../Component/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button'
import Footer from '../../Component/Footer';

function Contact() {
    return (
        <>
        <div className="contactDiv">
            <Navbar/>
            <div className="outer-part">
                <form>
                    <div className="row-1">
                        <div>
                            <label className="mt-3 colo">Your Name :</label><br/>
                            <input type="name" name="name"></input>
                        </div>
                        <div>
                            <label className="mt-3">Your Email :</label><br/>
                            <input type="name" name="email"></input>
                        </div>

                    </div>
                    <div className="row-2">
                        <div>
                            <label className="mt-1">Subject :</label><br/>
                            <input type="text" name="sub" size="54"></input>
                        </div>
                    </div>
                    <div className="row-3">
                        <div>
                            <label className="mt-1">Message :</label><br/>
                            <textarea type="text" name="msg" ></textarea>
                        </div>
                    </div>
                    <div className="btn">
                        <Button variant="outlined" color="primary" >Sign Up</Button>
                    </div>
                </form>
            </div>  
        </div>

        <Footer/>
        </>
    )
}

export default Contact
