import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { endpoint } from '../config.js';

function ExchangeRates(props) {
    const [rates, setRates] = useState([]);
    const url = endpoint + '/currency/now';
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            let json = await response.json();
            setRates(json);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Exchange Rate in EUR</h2>
            <LineChart width={500} height={400} data={rates}>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="shortdate" />
                <YAxis label={{ value: 'EUR', angle: -90, position: 'insideLeft' }} />
                <Legend verticalAlign="top" height={36} />
                <Tooltip />
                <Line type="monotone" dataKey="aud" stroke="blue" />
                <Line type="monotone" dataKey="brl" stroke="green" />
                <Line type="monotone" dataKey="cny" stroke="red" />
                <Line type="monotone" dataKey="gbp" stroke="#888888" />
                <Line type="monotone" dataKey="usd" stroke="orange" />
            </LineChart>
        </div>
    );
}

export default ExchangeRates;