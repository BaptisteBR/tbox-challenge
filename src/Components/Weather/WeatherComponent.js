import React from 'react';

import './WeatherComponent.css';

import RainIcon from '../../Assets/Rain_icon.png';
import Clouds_icon from '../../Assets/Clouds_icon.png';
import Sun_icon from '../../Assets/Sun_icon.png';

const Weather = ({ data }) => {
    return(
        <div id='weather-component'>
            <h1>Weather</h1>
            <p>{ data.name }</p>
            <img src={ getWeatherIcon(data.weather[0].main) } />
        </div>
    );
};

function getWeatherIcon(weather) {
    switch(weather) {
        case 'Thunderstorm':
        case 'Drizzle':
        case 'Rain':
        case 'Snow':
            return RainIcon;
        case 'Mist':
        case 'Smoke':
        case 'Haze':
        case 'Dust':
        case 'Fog':
        case 'Sand':
        case 'Ash':
        case 'Squall':
        case 'Tornado':
        case 'Clouds':
            return Clouds_icon;
        case 'Clear':
            return Sun_icon;
        default:
            break;
    }
}

export { Weather };