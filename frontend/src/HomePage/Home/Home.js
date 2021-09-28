import React from 'react'
import { Link } from 'react-router-dom';
import "../Home/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import yellowcc from '../../img/Home/yellowCc.png'
import bluecc from '../../img/Home/blueCc.png'
import bgHome from '../../img/Home/bgHome.jpg'
import purchase from '../../img/Home/purchase.png'
import find from '../../img/Home/find.png'
import reg from '../../img/Home/reg.png'
import verify from '../../img/Home/verify.png'
import sell from '../../img/Home/sell.png'
import 'font-awesome/css/font-awesome.min.css';
import Button from '@material-ui/core/Button'
import Navbar from '../../Component/Navbar'
import '../Home/bg'
import Footer from '../../Component/Footer'
import Search from '../../Component/Search'
import {Parallax} from 'react-parallax'

function Home() {
    return (
        <>
            <div className="landingHome">
                <Navbar/>
                <div className="serachAboveTagline">Discover the test of elite cake and much more</div>
                <Search/>
                <div className="HomeTag">Bakery</div>                
                <div className="imges">
                    <div>
                        <img src={yellowcc} alt="img1" data-speed="-3" className="homeimg1 img"></img>
                    </div>
                    <div>
                        <img src={bluecc} alt="img2" data-speed="3" className="homeimg2 img"></img>
                    </div>
                    <div>
                        <img src={yellowcc} alt="img1" data-speed="-3" className="homeimg3 img"></img>
                    </div>
                    <div>
                        <img src={bluecc} alt="img1" data-speed="-3" className="homeimg4 img"></img>
                    </div>
                </div>  
            </div>
            <section className="hsecond">
                <Parallax bgImage={bgHome} strength={600} blur='3'>
                <div style={{height:'100vh',width:'100vw'}}>
                    <div className="h-leftBox">
                        <div className="h-leftOuter"></div>
                        <div className="h-leftInner">
                            <h4>Are you a <span style={{fontSize:"2.5rem",color:"#283C63"}}>Baker</span>?</h4>
                            <div className="hdetail">
                                <div className="hmoredetail">
                                    <p className="hno">1</p>
                                    <img src={reg} alt="reg" width="100px"></img>
                                    <p>Register</p>
                                </div>
                                <div className="hmoredetail">
                                    <p className="hno">2</p>
                                    <img src={verify} alt="verify" width="100px"></img>
                                    <p>Verify</p>
                                </div>
                                <div className="hmoredetail">
                                    <p className="hno">3</p>
                                    <img src={sell} alt="sell" width="100px"></img>
                                    <p>Sell</p>
                                </div>
                            </div>
                            <Button variant="outlined" color="primary" className="btn mt-3" style={{color:"#283C63", border:"1px solid white"}}>
                            <Link to="/contact" style={{textDecoration:"none" ,color:"#283C63"}}>Sign Up</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="h-rightBox">
                        <div className="h-rightOuter"></div>
                        <div className="h-rightInner">
                            <h4>Are you a <span style={{fontSize:"2.5rem",color:"#283C63"}}>Customer</span>?</h4>
                            <div className="hdetail">
                                <div className="hmoredetail">
                                    <p className="hno">1</p>
                                    <img src={reg} alt="reg" width="100px"></img>
                                    <p>Register</p>
                                </div>
                                <div className="hmoredetail">
                                    <p className="hno">2</p>
                                    <img src={find} alt="find" width="100px"></img>
                                    <p>Find</p>
                                </div>
                                <div className="hmoredetail">
                                    <p className="hno">3</p>
                                    <img src={purchase} alt="purchase" width="100px"></img>
                                    <p>Purchase</p>
                                </div>
                            </div>
                            <Button variant="outlined" color="primary" className="btn mt-3" style={{color:"#283C63", border:"1px solid white"}}>
                                <Link to="/signup" style={{textDecoration:"none" ,color:"#283C63"}}>Sign Up</Link>
                            </Button>
                        </div>
                    </div>
                </div>
                </Parallax>
            </section>
            <Footer/>
        </>
    )
}
export default Home