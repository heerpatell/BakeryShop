import React from 'react'
import '../Component/footer.css'
import './footer.css'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {FaGooglePlusG} from 'react-icons/fa'
import {BiMap} from 'react-icons/bi'
import {ImPhone} from 'react-icons/im'
import {FiMail} from 'react-icons/fi'
import {Link} from 'react-router-dom'


let footerIcon={ margin:"40px 5px" , color:'#F85F73'}
function  Footer() {
    return(
        <>
        <footer className="text-center text-lg-start footerBg ">
            <section className="social d-flex justify-content-lg-between border-bottom container ">
                <div className="container d-flex justify-content-center text-md-start">
                    <a href="#"><FiFacebook size={30} style={footerIcon}/></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#"><FaInstagram size={30} style={footerIcon}/></a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#"><FaGooglePlusG size={30} style={footerIcon}/></a>
                </div>
            </section>

            <section className="flink">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <a href="#" className="text-decoration-none">Bakery Shop</a><br/><br/> 
                        </div>

                        <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <span className="text-uppercase fw-bold mb-4 fhead">Links</span><br/><br/>
                            <span><a href="#!" className="text-decoration-none">Home</a></span><br/><br/>
                            <span><a href="#!" className="text-decoration-none">Products</a></span><br/><br/>
                            <span><Link to="/about" className="text-decoration-none">About us</Link></span><br/><br/>
                            <span><Link to="/contact" className="text-decoration-none">Contact us</Link></span><br/><br/>
                        </div>

                        <div className="col-md-3 col-sm-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <span className="text-uppercase fw-bold mb-4 fhead">Support Us</span><br/><br/>
                            <span><a href="#!" className="text-decoration-none">Review</a></span><br/><br/>
                        </div>

                        <div className="col-md-3 col-sm-5 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4 fhead">Contact</h6>
                             <a href="#" className="text-decoration-none"><BiMap color="#F85F73"/> Ahmedabad,In</a><br/><br/> 
                             <a href="#" className="text-decoration-none"><FiMail color="#F85F73"/> Bakery@gmail.com</a><br/><br/>
                             <a href="#" className="text-decoration-none"><ImPhone color="#F85F73"/> 12345</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-4 ">
           <span className="flink"> © 2021 Copyright:</span>&nbsp;&nbsp;
            <a className="text-decoration-none fhead"> All Rights Reserved.</a>
            </div>
        </footer>
        </>
    )
}
export default Footer


// function Footer() {
//     return (
//         <>
//         <footer>
//             {/* <div>
//                 <div className="container-fluid first-footer">
//                     <div className="row py-3 d-flex align-items-center">
//                         <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
//                             <h6 class="mb-0">Get connected with us on social networks!</h6>
//                         </div>
//                         <div className="col-md-6 col-lg-7 text-center text-md-right">
//                             <a href="#"><FiFacebook size={25}/></a>&nbsp;&nbsp;&nbsp;&nbsp;
//                             <a href="#"><FaInstagram size={25}/></a>&nbsp;&nbsp;&nbsp;&nbsp;
//                             <a href="#"><FaGooglePlusG size={25}/></a>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}

//             <div className="container-fluid text-center text-md-left pt-5 first-footer">  
//                 <div className="row mt-3">
//                     <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
//                         <h6 class="text-uppercase font-weight-bold">Company name</h6>
//                         <p>Through this website you either buy delicious cakes or sell your cakes.</p>
//                     </div>

//                     {/* <div className="vertical col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center"></div> */}

//                     <div className="col-md-4 col-lg-3 col-xl-2 mx-auto mb-4">
//                         <h6 class="text-uppercase font-weight-bold">Contact</h6>
//                         <p className="mr-3"><MdPlace/>&nbsp;Ahmedabad,In</p>
//                         <p className="mr-3"><ImPhone/>&nbsp;1234</p>
//                     </div>
//                 </div>
//             </div>
            
//             <div className="d-flex justify-content-center second-footer pt-2">
//                 <a href="#" className="m-2"><FiFacebook size={25}/></a>
//                 <a href="#" className="m-2"><FaInstagram size={25}/></a>
//                 <a href="#" className="m-2"><FiMail size={25}/></a>
//                 <a href="#" className="m-2"><FaGooglePlusG size={25}/></a>
//             </div>

//             <div class="footer-copyright text-center text-black-50 py-3 third-footer">© 2020 Copyright:
//                 <a class="dark-grey-text" href="#"> Bakery.com</a>
//             </div>
//         </footer>
//         </>
//     )
// }

// export default Footer
