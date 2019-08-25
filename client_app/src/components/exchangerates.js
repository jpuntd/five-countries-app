import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { port } from '../config';

const ChartContainer = styled.div`
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
background-color: white;
`;

function ExchangeRates(props) {
    const [rates, setRates] = useState([]);
    const url = `http://localhost:${port}/currency/now`;
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            let json = await response.json();
            setRates(json);
        }
        fetchData();
    }, []);

    return (
        <ChartContainer>
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
        </ChartContainer>
    );
}

export default ExchangeRates;