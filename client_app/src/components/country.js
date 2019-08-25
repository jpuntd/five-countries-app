import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
background-color: white;
padding-bottom: 1em;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
img.flag {
    width: 100%;
}
`;

function Country({ info }) {
    let population = Math.round(info.population / 1000000) + ' million';
  return (
    <Column>
        <img className="flag" src={info.flag} alt="flag"/>
        <h2>{info.name}</h2>
        <div><i className="fa fa-phone">&nbsp;</i>{info.calling_code}</div>
        <div><i className="fa fa-map-marker">&nbsp;</i>{info.capital}</div>
        <div><i className="fa fa-money">&nbsp;</i>{info.currency}</div>
        <div><i className="fa fa-users">&nbsp;</i>{population}</div>

    </Column>
  );
}

export default Country;