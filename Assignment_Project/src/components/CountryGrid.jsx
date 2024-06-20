import React, { useState, useEffect } from "react";
import styles from "../stylesheets/countryGrid.module.css";

const CountryGrid = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContinent, setSelectedContinent] = useState("All");
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
    filterCountries();
  }, [search, selectedContinent, countries]);

  const filterCountries = () => {
    const filtered = countries.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesContinent =
        selectedContinent === "All" ||
        country.continents.includes(selectedContinent);
      return matchesSearch && matchesContinent;
    });
    setFilteredCountries(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  };

  // Pagination logic
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleContinentClick = (continent) => {
    setSelectedContinent(continent);
  };

  return (
    <div className={styles.countryGridContainer}>
      <div className={styles.topSection}>
        <div className={styles.categories}>
          <button
            className={`${styles.categoryButton} ${
              selectedContinent === "All" ? styles.activeCategoryButton : ""
            }`}
            onClick={() => handleContinentClick("All")}
          >
            All
          </button>
          <button
            className={`${styles.categoryButton} ${
              selectedContinent === "Asia" ? styles.activeCategoryButton : ""
            }`}
            onClick={() => handleContinentClick("Asia")}
          >
            Asia
          </button>
          <button
            className={`${styles.categoryButton} ${
              selectedContinent === "Europe" ? styles.activeCategoryButton : ""
            }`}
            onClick={() => handleContinentClick("Europe")}
          >
            Europe
          </button>
          <button
            className={`${styles.categoryButton} ${
              selectedContinent === "Australia"
                ? styles.activeCategoryButton
                : ""
            }`}
            onClick={() => handleContinentClick("Australia")}
          >
            Australia
          </button>
          <button
            className={`${styles.categoryButton} ${
              selectedContinent === "South America"
                ? styles.activeCategoryButton
                : ""
            }`}
            onClick={() => handleContinentClick("South America")}
          >
            South America
          </button>
          <button
            className={`${styles.categoryButton} ${
              selectedContinent === "North America"
                ? styles.activeCategoryButton
                : ""
            }`}
            onClick={() => handleContinentClick("North America")}
          >
            North America
          </button>
          <button
            className={`${styles.categoryButton} ${
              selectedContinent === "Africa" ? styles.activeCategoryButton : ""
            }`}
            onClick={() => handleContinentClick("Africa")}
          >
            Africa
          </button>
          <button
            className={`${styles.categoryButton} ${
              selectedContinent === "Antarctica"
                ? styles.activeCategoryButton
                : ""
            }`}
            onClick={() => handleContinentClick("Antarctica")}
          >
            Antarctica
          </button>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          className={styles.searchInput}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filteredCountries.length === 0 ? (
        <div className={styles.noCountriesDialog}>
          <p>Sorry, there is no country to show.</p>
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default CountryGrid;
