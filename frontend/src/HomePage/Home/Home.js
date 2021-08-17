import React,{useState} from 'react'
import reactDom from 'react-dom'
import "../Home/home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import hand1 from '../../img/Home/hand1.png'
import hand2 from '../../img/Home/hand2.png'
import seller from '../../img/Home/seller.jpg'
import buyer from '../../img/Home/buyer.jpg'
import 'font-awesome/css/font-awesome.min.css';
import Button from '@material-ui/core/Button'
import {Card} from 'react-bootstrap'
import Navbar from '../../Component/Navbar'
import '../Home/bg'
import Footer from '../../Component/Footer'

function Home() {
    return (
        <>
            <div className="App">
                <Navbar/>
                <div className="imges">
                    <div>
                        <img src={hand1} alt="img1" data-speed="-3" className="hand1 img"></img>
                    </div>
                    <div>
                        <img src={hand2} alt="img2" data-speed="3" className="hand2 img"></img>
                    </div>
                </div>  
            </div>
            <section className="secondpg">
                <div className="left">
                    <Card style={{ width: '20rem'}} className="mx-auto my-5 card-left">
                    <Card.Img variant="top" src={buyer}/>
                    <Card.Body>
                        <Card.Title className="hcardt">Do you want to buy cake?</Card.Title>
                        <Card.Text>
                        <ol>
                                <li>Register Yourself.</li>
                                <li>Select your streetname and find available bakers.</li>
                                <li>Purchase your favorite item.</li>
                            </ol>
                        </Card.Text>
                        <Button variant="outlined" color="primary" className="btn">Sign Up</Button>
                    </Card.Body>
                    </Card>
                    </div>

                <div className="right">
                <Card style={{ width: '20rem'}} className="mx-auto my-5 card-right">
                    <Card.Img variant="top" src={seller} className="cardImg" />
                    <Card.Body>
                        <Card.Title className="hcardt">Do you want to sell cake?</Card.Title>
                        <Card.Text>
                        <ol>
                                <li>Register your shop here.</li>
                                <li>Once Shop is verified, you'll get mail with credentials.</li>
                                <li>Here you go! Add up your items and sell it virtually.</li>
                            </ol>
                        </Card.Text>
                        <Button variant="outlined" color="primary" className="btn">Sign Up</Button>
                    </Card.Body>
                </Card>   
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Home
