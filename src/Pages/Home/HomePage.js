import React from 'react';
import { Link } from 'react-router-dom';
import Parser from 'rss-parser';

import './HomePage.css';

import { UserService } from '../../Services';

import {
    Feed,
    Weather
} from '../../Components';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: {
                weather: [{}]
            },
            feed: {
                items: [{}]
            }
        };
    }
    
    handleClick() {
        UserService.logout();
        window.location.reload(true);
    }

    componentDidMount() {
        this.getLocation(location => {
            var URL = 'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={appid}';
            URL = URL.replace('{lat}', location.coords.latitude);
            URL = URL.replace('{lon}', location.coords.longitude);
            URL = URL.replace('{appid}', 'd0a10211ea3d36b0a6423a104782130e');
            fetch(URL)
                .then(res => res.json())
                .then((data) => {
                    console.log('DATA');
                    console.log(data);
                    this.setState({ weather: data })
                })
                .catch(console.log);
        }, () => {
            console.log('Unable to get current location');
        });

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

    getLocation(success, error) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log('POSITION');
                console.log(position);
                return success(position);
            }, () => {
                console.log('ERROR');
                return error();
            });
        }
        else {
            console.log('ERROR');
            return error();
        }
    }

    render() {
        return(
            <div>
                <h1>Good day Swapnil</h1>
                <Weather data={ this.state.weather } />
                <Link to='/news'>News</Link>
                <Feed data={ this.state.feed } />
                <button onClick={ (e) => this.handleClick(e) }>Sign out</button>
            </div>
        );
    }
}

export { HomePage };
