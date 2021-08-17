import { Hidden } from '@material-ui/core';
import React from 'react'
import bg from '../img/signIn_Up/bg.png'
import h1 from '../img/signIn_Up/h1.png'
import h2 from '../img/signIn_Up/h2.png'

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

function SignLeft() {
    return (
    <>
     <div className="div_1" style={{height:"100vh"}} onMouseOver={mouseOver}>
        <img class="bg_img" src={bg} alt=""></img>
        <img class="h1_img class_img" src={h1} alt="" />
        <img class="h2_img class_img" src={h2} alt="" />
    </div>
    </>
    )
}

export default SignLeft
