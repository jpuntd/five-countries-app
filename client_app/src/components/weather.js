import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { port } from '../config.js';

const Weatherpanel = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around; 
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); 
background-color: white;
p {
    font-size: 1.2em;
}
`;

function Weather(props) {
    const [averages, setAverages] = useState([]);
    const url = `http://localhost:${port}/weather`;
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
        <Weatherpanel>
            <h2>Today Global Weather Averages</h2>
            <h3>Average Temperature</h3>
            <p><i className="fa fa-3x fa-thermometer">&nbsp;</i>{averages.temp}°C</p>
            <h3>Average Windspeed</h3>
            <p><i className="fa fa-3x fa-tachometer">&nbsp;</i>{averages.windspeed} km/h</p>
        </Weatherpanel>
    );
}

export default Weather;