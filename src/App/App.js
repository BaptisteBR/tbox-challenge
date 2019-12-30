import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from '../Components';

import './App.css';

import {
    FeedPage,
    HomePage,
    LoginPage,
    RegisterPage
} from '../Pages';

class App extends React.Component {
    render() {
        return (
            <Router>
                <PrivateRoute exact path="/" component={ HomePage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/register" component={ RegisterPage } />
                <Route path="/news" component={ FeedPage } />
            </Router>
        );
    }
}

export { App };
