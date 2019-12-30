import React from 'react';

import './FeedComponent.css';

const Feed = ({ data }) => {
    return(
        <div id='feed-component'>
            <h1>{ data.items[0].title }</h1>
            <p>{ data.items[0].link }</p>
        </div>
    );
};

export { Feed };