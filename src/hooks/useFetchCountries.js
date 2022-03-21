
import { useState, useEffect } from 'react';
// import { allCountries } from './../helpers/getCountries';

export const useFetchCountries = (functionCountry) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
      
        functionCountry()
            .then(data => {
                setState({
                    data,
                    loading: false
                })
            })
    }, [])
    

    return state
}
