import React from "react";
import { useForm } from "../../hooks/useForm";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Selectors = () => {
  const [continent, setContinent] = useState({
    value: ""
  })
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchText === "") {
      navigate(`/`);
    } else {
      navigate(`../search/?q=${searchText}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    if(continent.value === "") {
      navigate('/')
    } else if (continent.value === "all"){
      navigate('/')
    } else {
      navigate(`../filter/region/${continent.value}`)
    }
    
    

  };

  const handleChange = (e) => {
    
    setContinent({
      value: e.target.value
    })
  }

  return (
    <div id="selectors">
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            className="search-input"
            autoComplete="off"
            placeholder="Search for a country..."
            aria-label="Search"
            name="searchText"
            onChange={handleInputChange}
          />

          {/* <button className="search-button" type="submit">Search</button> */}
        </form>
      </div>
      <div id="sort-container">
        <form onSubmit={handleSubmit}>
          <label>
            <select value={continent.value} onChange={handleChange}>
              <option>Filter by Region</option>
              <option value="all">All</option>
              <option value="Africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
          <input type="submit" value="Filter" />
        </form>
      </div>
    </div>
  );
};
