import React from 'react'
import { Route, Routes } from 'react-router'
import { SearchScreen } from '../components/countries/SearchScreen';
import { SortCountry } from '../components/countries/SortCountry';

import { CountryDetail } from './../components/countries/CountryDetail';
import { Navigate } from 'react-router-dom';

export const DashbourdRoutes = () => {
  return (
    <div>
        
        <Routes>
            <Route path="country/:name" element={<CountryDetail />} />
            <Route path="search" element={<SearchScreen/>} />
            <Route path="filter/region/:region" element={<SortCountry />} />
            
            <Route path="*" element={<Navigate to='/' replace={true} />} />


        </Routes>
    </div>
  )
}
