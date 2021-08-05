import React from 'react';
import {Route, Switch, Link} from "react-router-dom";
import News from "./News";
import Message from "./Message";

function About() {
    return (
        <div className="App">
            <Link to="/about/news">News</Link>
            <Link to={"/about/message"}>Message</Link>
            <hr/>
            <Switch>
                <Route path={"/about/news"} component={News}></Route>
                <Route path={"/about/message"} component={Message}></Route>
            </Switch>
        </div>
    );
}

export default About;
