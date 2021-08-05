import React from 'react';
import './App.css';
import {Route, Switch, NavLink, Redirect} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Main from "./pages/Main";

function App() {
    return (
        <div className="App">
            <div className="container">
                <NavLink to="/">Main</NavLink>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <Switch>
                    <Route exact={true} path={"/"} component={Main}></Route>
                    <Route path={"/home"} component={Home}></Route>
                    <Route path={"/about"} component={About}></Route>
                    <Redirect to={"/home"} />
                </Switch>
            </div>
        </div>
    );
}

export default App;
