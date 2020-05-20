import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Friends from "./components/Friends/Friends";
import Messages from "./components/Messages/Messages";
import Users from "./components/Users/Users";

import {
    Link,
    Route,
    Switch,
    HashRouter,
    BrowserRouter
} from "react-router-dom";


class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/friends" component={Friends} />
                        <Route exact path="/message" component={Messages} />
                        <Route exact path="/users" component={Users} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    };
}

export default App;
