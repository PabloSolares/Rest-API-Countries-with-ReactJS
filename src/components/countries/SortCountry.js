import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryByRegion } from '../../helpers/getCountries';
import { LoadingScreen } from '../ui/LoadingScreen';
import { Selectors } from '../ui/Selectors';
import { CountryCard } from './CountryCard';

export const SortCountry = () => {
    const {region} = useParams()
    const [data, setData] = useState({
        sortCountries: [],
        loading: true
    })

    const { sortCountries, loading } = data;


    useEffect(() => {
      getCountryByRegion(region)
        .then( countries => {
            setData({
                sortCountries: countries,
                loading: false
            })
        })
    }, [region])
    


  return (
    <div>
        { loading && <LoadingScreen />}

        { !loading && <Selectors />}


        {data && (
        <div id="card-container">
          {sortCountries?.map((country) => {
            return (
              <CountryCard
                key={country?.name?.common}
                name={country?.name?.common}
                population={country?.population}
                flag={country?.flags.svg}
                region={country?.region}
                capital={country?.capital}
              />
            );
          })}
        </div>
      )}
        
    </div>
  )
}
