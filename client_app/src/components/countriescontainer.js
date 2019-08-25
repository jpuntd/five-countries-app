import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Country from './country';
import { port } from '../config';
const url = `http://localhost:${port}/countries`;

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 1em;
padding: 1em;
margin-top: 1em;
`;

function CountriesContainer() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCountries(json);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Container>
      {isError && <div>Something went wrong ...</div>}
      {isLoading && <div>Loading ...</div>}
      {countries.map(c =>
        <Country key={c.id} info={c} />)}
    </Container>
  );
}

export default CountriesContainer;