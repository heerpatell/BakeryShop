import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import i1 from '../../img/Home/buyer.jpg'
import './about.css'
import {FiFacebook, FiInstagram} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'

function About() {
    return (
    <>
    <div className="about">
        <section className="about-us">
            <div className="container">
                <h1 className="about-title">MEET OUR TEAM</h1>
                <div className="row" >
                    <div className="col-md-3 profile text-center">
                        <div className="img-about">
                            <img src={i1} className="img-responsive" width="250px" height="200px"></img>
                            <ul>
                                <a href="#"><li><FiFacebook size={27}/></li></a>
                                <a href="#"><li><FiInstagram size={27}/></li></a>
                                <a href="#"><li><FiMail size={27}/></li></a>
                             </ul>   
                        </div>
                        <h2>Heer</h2>
                        <h3>Role Here</h3>
                        <p>19ce098</p>
                    </div>

                    <div className="col-md-3 profile text-center">
                        <div className="img-about">
                            <img src={i1} className="img-responsive" width="250px" height="200px"></img>
                            <ul>
                                <a href="#"><li><FiFacebook size={27}/></li></a>
                                <a href="#"><li><FiInstagram size={27}/></li></a>
                                <a href="#"><li><FiMail size={27}/></li></a>
                             </ul>   
                        </div>
                        <h2>Jay</h2>
                        <h3>Role Here</h3>
                        <p>19ce100</p>
                    </div>

                    <div className="col-md-3 profile text-center">
                        <div className="img-about">
                            <img src={i1} className="img-responsive" width="250px" height="200px"></img>
                            <ul>
                                <a href="#"><li><FiFacebook size={27}/></li></a>
                                <a href="#"><li><FiInstagram size={27}/></li></a>
                                <a href="#"><li><FiMail size={27}/></li></a>
                             </ul>   
                        </div>
                        <h2>Riya</h2>
                        <h3>Role Here</h3>
                        <p>19ce107</p>
                    </div>

                    <div className="col-md-3 profile text-center">
                        <div className="img-about">
                            <img src={i1} className="img-responsive" width="250px" height="200px"></img>
                            <ul>
                                <a href="#"><li><FiFacebook size={27}/></li></a>
                                <a href="#"><li><FiInstagram size={27}/></li></a>
                                <a href="#"><li><FiMail size={27}/></li></a>
                             </ul>   
                        </div>
                        <h2>jainish</h2>
                        <h3>Role Here</h3>
                        <p>19ce116</p>
                    </div>

                        
                </div>
            </div>
        </section>
    </div>    
    </>
    )
}

export default About
