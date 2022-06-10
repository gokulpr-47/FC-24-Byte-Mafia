import React from 'react'
import NavbarComp from './components/NavbarComp'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import { BrowserRouter, Route, Link, Routes, Switch } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
// import NavbarComp from './components/NavbarComp'

function Dash(){
    return <Dashboard/>
}
export default function App(){
    return(
        <BrowserRouter>
            <NavbarComp/>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path='/dashboard' exact>
                        <Dash/>
                    </Route>
                </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
