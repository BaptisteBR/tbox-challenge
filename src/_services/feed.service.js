import Parser from 'rss-parser';

export const feedService = {
    getFeed
};

function getFeed() {
    const parser = new Parser();

    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    const URL = 'https://feeds.bbci.co.uk/news/rss.xml';
    
    parser.parseURL(CORS_PROXY + URL)
        .then(feed => {
            console.log(feed);
            if (feed.title) {
                return feed;
            }
            return Promise.reject(feed.error);
    });
}