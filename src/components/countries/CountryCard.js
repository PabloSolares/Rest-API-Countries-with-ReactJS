import React from 'react'
import { Link } from 'react-router-dom';

export const CountryCard = ({ name, population, flag,  region, capital}) => {
  
  return ( 

        <Link to={`../country/${name}`}  className='card'>
            <img src={flag} alt="Flag"  />
            <div className='card-info' >
                <h4 >{name}</h4>
                <span><strong>Population: </strong>{population}</span>
                <span><strong>Region: </strong>{region}</span>
                <span><strong>Capital: </strong>{capital}</span>
            </div>
        </Link>
    
  )
}
