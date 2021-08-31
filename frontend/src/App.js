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

function App() {

  return (
    <div className="App">
    <Switch>
        <Route excat path='/signin' component={SignIn}></Route>
        <Route excat path='/signup' component={SignUp}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/about' component={About}></Route>
        <Route path="/baker/product" component={Product}></Route>
        <Route path="/baker" component={Bhome}></Route>
        <Route path="/admincontact" component={AdminContact}></Route>
        <Route excat path='/' component={Home}></Route>
    </Switch>
    </div>
  );
}

export default App;
