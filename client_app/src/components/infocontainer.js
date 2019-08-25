import React from 'react';
import styled from 'styled-components';
import ExchangeRates from './exchangerates';
import Weather from './weather';

const Row = styled.div`
background-color: white;
padding: 1em;
min-heigth: 200px;
margin: 1em;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-gap: 1 em;
`;

const InfoContainer = () => (
    <Row>
        <ExchangeRates></ExchangeRates>
        <Weather />
    </Row>
);

export default InfoContainer;