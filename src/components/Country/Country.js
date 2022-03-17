import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flags, continents, population } = props.country;
    return (
        <div className="country-card">
            <img style={{ height: '40px', width: '80px' }} src={flags.png} alt="flag" />
            <h2>{name.common}</h2>
            <p>
                Continent: {continents}
                <br />
                Population: {population}
            </p>
        </div>
    );
};

export default Country;