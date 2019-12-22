import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from '../_components';

import './App.css';

import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <PrivateRoute exact path="/" component={ HomePage } />
                <Route path="/login" component={ LoginPage } />
                <Route path="/register" component={ RegisterPage } />
            </Router>
        );
    }
}

export { App };