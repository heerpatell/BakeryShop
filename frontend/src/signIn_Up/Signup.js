import React from 'react'
import { Link } from 'react-router-dom'
import './sign.css'
import SignLeft from '../Component/SignLeft'

function Signup() {

    var flg = 0;
    function mouseOver() {
        if(flg){
            glassDistant();
        }
        else {
            glassClose();
        }
        flg = flg === 1 ? 0 : 1;
    }
    function glassClose() {

        var styleElement = document.createElement('style');
        styleElement.innerHTML = `
            .h1_img {
                transition: .5s;
                transition-timing-function: cubic-bezier(.6,-0.28,.74,.05);
                left: 237px;
            }

            .h2_img {
                transition: .5s;
                transition-timing-function: cubic-bezier(.6,-0.28,.74,.05);
                right: 0;
            }
        `;
        var bodyElement = document.querySelector('body');
        bodyElement.appendChild(styleElement);
        
    }

    function glassDistant() {

        var styleElement = document.createElement('style');
        styleElement.innerHTML = `
            .h1_img {
                transition: .5s;
                transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); 
                left: 317px;
            }

            .h2_img {
                transition: .5s;
                transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1); 
                right: 80px;
            }
        `;
        var bodyElement = document.querySelector('body');
        bodyElement.appendChild(styleElement);
        
    }

    return (
    <>
    <div className="main-outerr" id="div_1">
       <SignLeft/>
        <div className="div_2" id="div_2" >
            
            <div id="login" className="login">
                <div className="goto_signup" onMouseOver={mouseOver}>
                    <span>Already a member? <Link to="signin" className="a_signin">Sign In</Link></span>
                    <a className="a_signin" src="">Sign Up as Baker</a>
                </div>
                <h1 className="signup_heading" onMouseOver={mouseOver}>Sign Up</h1>
                <form>
                   
                    <div className="su_main">
                        <div className="su_name_flex">
                            <div onMouseOver={mouseOver}>
                                <h4 className="su_h4">First name:</h4>
                                <input className="su_inputbox" type="text" placeholder="Name" />
                            </div>
                            <div onMouseOver={mouseOver}>
                                <h4 className="su_h4">Last name:</h4>
                                <input className="su_inputbox" type="text" placeholder="Surname" />
                            </div>
                        </div>

                        <h4 className="su_h4" onMouseOver={mouseOver}>Create Username:</h4>
                        <input type="text" placeholder="Username" onMouseOver={mouseOver} />

                        <h4 className="su_h4" onMouseOver={mouseOver}>Enter Email:</h4>
                        <input type="text" placeholder="Email" onMouseOver={mouseOver} />

                        <div className="su_pass_flex">
                            <div onMouseOver={mouseOver}>
                                <h4 className="su_h4">Create Password:</h4>
                                <input className="su_inputbox" type="password" placeholder="Password" />
                            </div>
                            <div onMouseOver={mouseOver}>
                                <h4 className="su_h4">Confirm Password:</h4>
                                <input className="su_inputbox" type="password" placeholder="Password" />
                            </div> 
                        </div>
                    </div>
                    <div className="su_bottom_flex">
                        <p onMouseOver={mouseOver}>
                        <input type="checkbox" /><span href="">I Agree Term and Conditions</span></p>
                        <button onMouseOver={mouseOver}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
    <script src="sign_script.js"></script>
    </>
    )
}

export default Signup
