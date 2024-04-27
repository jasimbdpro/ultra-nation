import React from 'react';

const Country = (props) => {
    const { name, population, region, flags, } = props.country;
    console.log(props.country)
    const flagStyle = {
        height: '50px', borderRadius: '20px'
    };
    return (
        <div>
            <h4>This is {name.common}</h4>
            <img style={flagStyle} src={flags.png} alt="" />
            <p>population: {population}</p>
            <p><small>region: {region} </small></p>
        </div>
    );
};

export default Country;