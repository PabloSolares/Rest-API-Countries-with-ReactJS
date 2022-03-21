export const allCountries = async () => {
    const url = `https://restcountries.com/v2/all`
    const resp = await fetch(url);
    const body = await resp.json();

    return body
}

export const countryByName = async (name) => {
    const url = `https://restcountries.com/v2/name/${name}`
    const resp = await fetch(url);
    const body = await resp.json();
    return {
        name: body[0]?.name,
        nativeName: body[0]?.nativeName,
        population: body[0]?.population,
        region: body[0]?.region,
        subReg: body[0]?.subregion,
        capital: body[0]?.capital,
        domain: body[0]?.topLevelDomain,
        currencies: body[0]?.currencies[0]?.name,
        lenguages: body[0]?.languages,
        flag: body[0]?.flag
    }  
}

export const getCountryByRegion = async (region) => {
    // console.log(region)
    const url = `https://restcountries.com/v3.1/region/${region}`
    const resp = await fetch(url);
    const body = await resp.json();
    
    return body 
}

