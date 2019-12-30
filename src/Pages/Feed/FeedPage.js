import React from 'react';
import Parser from 'rss-parser';

import './FeedPage.css';

class FeedPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: {
                items: []
            }
        }
    }

    componentDidMount() {
        const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
        const URL = 'https://feeds.bbci.co.uk/news/rss.xml';
        const parser = new Parser();
        parser.parseURL(CORS_PROXY + URL)
            .then((data) => {
                console.log('DATA');
                console.log(data);
                this.setState({ feed: data });
            })
            .catch(console.log);
    }

    render() {
        return(
            <div>
                <h1>News</h1>
                <h2>{ this.state.feed.title }</h2>
                { this.state.feed.items.map((item, index) => (
                    <div key={ index }>
                        <h2>{ item.title }</h2>
                        <p>{ item.description }</p>
                        <p>{ item.content }</p>
                    </div>
                )) }
            </div>
        );
    }
}

export { FeedPage };
