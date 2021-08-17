import React from 'react'
import SignLeft from '../Component/SignLeft'
import { Link } from 'react-router-dom'
import './sign.css'

function SignIn() {
    
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
    <div id="div_1" className="main-outerr">
       <SignLeft />
        <div className="div_2" id="div_2" >
            <div id="login" className="login">
                <div className="goto_signup" onMouseOver={mouseOver}>
                    <span>Not a member? <Link to="signup" className="a_signin">Sign Up</Link></span>
                </div>

                <h1 className="login_heading" onMouseOver={mouseOver}>Sign In</h1>
                
                <form>
                    <h4 onmouseover="mouseOver()">Username or Email :</h4>
                    <input type="text" placeholder="Username" className="inputbox" onMouseOver={mouseOver}/>
                    <h4 onmouseover="mouseOver()">Password :</h4>
                    <input type="password" placeholder="Password" className="inputbox" onMouseOver={mouseOver}/>
                    <div className="login_bottom_flex">
                        <p onMouseOver={mouseOver}>Forgot Password ?</p>
                        <button onMouseOver={mouseOver}>Sign In</button>
                    </div>
                </form>

            </div>
        </div>
    </div>
    </>
    )
}

export default SignIn
