import React, { useState, useEffect } from 'react';
import { endpoint } from '../config.js';

function Weather(props) {
    const [averages, setAverages] = useState([]);
    const url = endpoint + '/weather';
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            let json = await response.json();
            let { temp, windspeed } = json
            setAverages({
                temp: Math.round(temp * 10) /10,
                windspeed: Math.round(windspeed *10) /10
            });
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Today Global Weather Averages</h2>
            <div><h3>Average Temperature</h3>
            <i className="fa fa-3x fa-thermometer">&nbsp;</i>{averages.temp}°C</div>
            <div><h3>Average Windspeed</h3>
            <i className="fa fa-3x fa-tachometer">&nbsp;</i>{averages.windspeed} km/h</div>
        </div>
    );
}

export default Weather;