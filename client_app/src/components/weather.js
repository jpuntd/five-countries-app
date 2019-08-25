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
    const url = `http://localhost:${port}/weather`;
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [averages, setAverages] = useState([]);
    useEffect(() => {
        async function fetchData() {
            setIsError(false);
            setIsLoading(true);
            try {
                const response = await fetch(url);
                let json = await response.json();
                let { temp, windspeed } = json;
                setAverages({
                    temp: Math.round(temp * 10) / 10,
                    windspeed: Math.round(windspeed * 10) / 10
                });
            } catch (err) {
                setIsError(true);
            }
            setIsLoading(false);
        }
        fetchData();
    }, []);

    return (
        <Weatherpanel>
            <h2>Today Global Weather Averages</h2>
            {isLoading && <div>Loading ...</div>}
            {isError && <div>Something went wrong ...</div>}
            <h3>Average Temperature</h3>
            <p><i className="fa fa-3x fa-thermometer">&nbsp;</i>{averages.temp}°C</p>
            <h3>Average Windspeed</h3>
            <p><i className="fa fa-3x fa-tachometer">&nbsp;</i>{averages.windspeed} km/h</p>
        </Weatherpanel>
    );
}

export default Weather;