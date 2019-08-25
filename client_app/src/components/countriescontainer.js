import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Country from './country';
import { port } from '../config';
const url = `http://localhost:${port}/countries`;

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
grid-gap: 1em;
padding: 1em;
`;

function CountriesContainer() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const json = await response.json();
      setCountries(json);
    }
    fetchData();
  }, []);

  return (
    <Container>
      {countries.map(c =>
        <Country key={c.id} info={c} />)}
    </Container>
  );
}

export default CountriesContainer;