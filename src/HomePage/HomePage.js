import React from 'react';
import { Link } from 'react-router-dom';

import './HomePage.css';

class HomePage extends React.Component {

    render() {
        return(
            <div>
                <h1>Good day Swapnil</h1>
                <Link to="/news">News</Link>
            </div>
        );
    }
}

export { HomePage };
