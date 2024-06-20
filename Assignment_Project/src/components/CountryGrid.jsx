import React, { useState, useEffect } from "react";
import styles from "../stylesheets/countryGrid.module.css";

const CountryGrid = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 48;

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
    setCurrentPage(1); // Reset to first page on search
  }, [search, countries]);

  // Pagination logic
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.countryGridContainer}>
      <div className={styles.topSection}>
        <div className={styles.categories}>
          <button className={styles.categoryButton}>Asia</button>
          <button className={styles.categoryButton}>Europe</button>
          <button className={styles.categoryButton}>Australia</button>
          <button className={styles.categoryButton}>South America</button>
          <button className={styles.categoryButton}>North America</button>
          <button className={styles.categoryButton}>Africa</button>
          <button className={styles.categoryButton}>Antarctica</button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          className={styles.searchInput}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={styles.countryGrid}>
        {currentCountries.map((country) => (
          <div className={styles.countryCard} key={country.cca3}>
            <img
              src={country.flags.png}
              alt={`${country.name.common} flag`}
              className={styles.flagImage}
            />
            <h3 className={styles.countryName}>{country.name.common}</h3>
            <p className={styles.countryDetail}>
              Capital: {country.capital ? country.capital[0] : "N/A"}
            </p>
            <p className={styles.countryDetail}>Region: {country.region}</p>
            <p className={styles.countryDetail}>
              Population: {country.population.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`${styles.pageButton} ${
              index + 1 === currentPage ? styles.activePageButton : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountryGrid;
