import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from '../src/HomePage/Home/Home'
import Contact from './HomePage/Contact/Contact';
import SignIn from './signIn_Up/SignIn';
import SignUp from './signIn_Up/Signup';
import About from './HomePage/AboutUs/About'

function App() {
  return (
    <div className="App">
    <Switch>
        <Route excat path='/signin' component={SignIn}></Route>
        <Route excat path='/signup' component={SignUp}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/about' component={About}></Route>
        <Route excat path='/' component={Home}></Route>
    </Switch>
    </div>
  );
}

export default App;
