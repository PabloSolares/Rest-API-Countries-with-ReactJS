import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { countryByName } from '../../helpers/getCountries';
import  queryString  from 'query-string';
import { CountryCard } from './CountryCard';
import { LoadingScreen } from './../ui/LoadingScreen';
import { Selectors } from './../ui/Selectors';

export const SearchScreen = () => {
    const [data, setData] = useState({
        country: [],
        loading: true
    })

    const location = useLocation();
    
    const { q = '' } = queryString.parse(location.search);
    console.log(q)


    const { country, loading } = data;
    useEffect(() => {
      countryByName(q).then((country) => {
        setData({
          country: country,
          loading: false,
        });
      });
    }, [q]);

  return (
    <div id='card-container'>
        { loading && <LoadingScreen />}
        {
            !loading && country && <Selectors />
        }

        
        { 
            (!loading && country.name === undefined)
            &&
            <div className='error'>
               There is no result with: <strong> { q } </strong>
            </div>
        }
        {
            (!loading && country && country.name  )
            &&
            <div className='search-width'>

            <CountryCard
                key={country?.name}
                name={country?.name}
                population={country?.population}
                flag={country?.flag}
                region={country?.region}
                capital={country?.capital}
                />
            </div>
           
        }
        
    </div>
  )
}
