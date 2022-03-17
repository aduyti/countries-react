import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="country-card">
            <div>
                <h2>{props.name}</h2>
                <p>{props.area}</p>

            </div>
        </div>
    );
};

export default Country;