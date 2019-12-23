import React from 'react';

import './FeedPage.css';

import { feedService } from '../_services';

class FeedPage extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            items: [],
            error: ''
        };
    }

    render() {
        //this.setState({ items: feedService.getFeed() });
        const { items, error } = this.state;
        return(
            <div>
                <h1>News</h1>
                {items.map((item, index) => (
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
            
        );
    }
}

export { FeedPage };
