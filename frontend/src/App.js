import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from '../src/HomePage/Home/Home'
import Contact from './HomePage/Contact/Contact'
import SignIn from './signIn_Up/SignIn'
import SignUp from './signIn_Up/Signup'
import About from './HomePage/AboutUs/About'
import Bhome from './Baker/Bhome'
import Product from './Baker/Product'
import AdminContact from './Admin/AdminContact'
import Bprofile from './Baker/Bprofile'
import OrderHis from './Baker/OrderHis';
import ReceOrder from './Baker/ReceOrder';
import Chome from './Customer/Chome';
import Cordhistory from './Customer/Cordhistory';
import Cproduct from './Customer/Cproduct';
import Cprofile from './Customer/Cprofile';
import Crecorder from './Customer/Crecorder';
import AbakerCon from './Admin/AbakerCon';
import Acustomercon from './Admin/Acustomercon';

function App() {
  return (
    <div className="App">
    <Switch>
        <Route excat path='/signin' component={SignIn}></Route>
        <Route excat path='/signup' component={SignUp}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/about' component={About}></Route>
        <Route excat path="/baker/profile" component={Bprofile}></Route>
        <Route excat path="/baker/product" component={Product}></Route>
        <Route excat path="/baker/recentorder" component={ReceOrder}></Route>
        <Route excat path="/baker/orderhistory" component={OrderHis}></Route>
        <Route excat path="/baker" component={Bhome}></Route>
        <Route excat path="/customer/profile" component={Cprofile}></Route>
        <Route excat path="/customer/product" component={Cproduct}></Route>
        <Route excat path="/customer/recentorder" component={Crecorder}></Route>
        <Route excat path="/customer/orderhistory" component={Cordhistory}></Route>
        <Route excat path="/customer" component={Chome}></Route>
        <Route path="/adminbakercontact" component={AbakerCon}></Route>
        <Route path="/admincustomercontact" component={Acustomercon}></Route>
        <Route path="/admincontact" component={AdminContact}></Route>
        <Route excat path='/' component={Home}></Route>
    </Switch>
    </div>
  );
}

export default App;