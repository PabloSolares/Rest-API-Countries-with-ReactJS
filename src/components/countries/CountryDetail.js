import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { countryByName } from "../../helpers/getCountries";
import { LoadingScreen } from "../ui/LoadingScreen";

export const CountryDetail = () => {
  const { name } = useParams();
  const [data, setData] = useState({
    country: {},
    loading: true,
  });

  const navigate = useNavigate()

  const handleReturn = () => {
      navigate( -1 );
  }

  const { country, loading } = data;
  useEffect(() => {
    countryByName(name).then((country) => {
      setData({
        country: country,
        loading: false,
      });
    });
  }, []);

  const languages = country?.lenguages?.map((len) => {
    return len;
  });

  // console.log(languages.forEach(element => {
  //     return element
  // }))

  return (
    <>

      {
          loading && <LoadingScreen />
      }   
      {country && !loading && (
        <div id="detail-container">
          <div className="back-button">
            
            <button onClick={handleReturn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
                Back
            </button>
          </div>
          <div className="img-container">
            <img src={country?.flag} alt="Flag" />
          </div>

          <div className="info-container">
            <h2>{country?.name}</h2>
            <div className="collumn">
              <span>
                <strong>Native Name: </strong>
                {country?.nativeName}{" "}
              </span>
              <span>
                <strong>Population: </strong>
                {country?.population}{" "}
              </span>
              <span>
                <strong>Region: </strong>
                {country?.region}{" "}
              </span>
              <span>
                <strong>Sub Region: </strong>
                {country?.subReg}{" "}
              </span>
              <span>
                <strong>Capital: </strong>
                {country?.capital}{" "}
              </span>
              <span>
                <strong>Top Level Domain: </strong>
                {country?.domain[0]}{" "}
              </span>
              <span>
                <strong>Currencies: </strong>
                {country?.currencies}{" "}
              </span>
              <span> <strong>Languages: </strong>    
              {languages.map((len) => {
                return len.name  
              })} 
              </span>
            </div>
            
                
          </div>
        </div>
      )}
    </>
  );
};
