import React, { useState, useEffect } from "react";
import "../stylesheets/countryGrid.css";

const CountryGrid = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setFilteredCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, countries]);

  return (
    <div className="country-grid-container">
      <div className="top-section">
        <div className="categories">
          <button>All News</button>
          <button>College News</button>
          <button>Exam News</button>
          <button>Admission 2024</button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="country-grid">
        {filteredCountries.map((country) => (
          <div className="country-card" key={country.cca3}>
            <img src={country.flags.png} alt={`${country.name.common} flag`} />
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
            <p>Region: {country.region}</p>
            <p>Population: {country.population.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryGrid;
