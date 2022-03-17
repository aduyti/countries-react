import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="country-card">
            <img style={{ height: '40px', width: '80px' }} src={props.flag} alt="flag" />
            <h2>{props.name}</h2>
            <p>
                Continent: {props.area}
                <br />
                Population: {props.population}
            </p>
        </div>
    );
};

export default Country;