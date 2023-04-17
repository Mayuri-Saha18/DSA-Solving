import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const searchCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-name.json`
        );
        const filteredCountries = response.data.filter((country) =>
          country.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(filteredCountries.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    const timeoutId = setTimeout(() => {
      if (searchText.length > 0) {
        searchCountries();
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchText]);

  const renderSearchResults = () => {
    return (
      <div className="search-results">
        {searchResults.map((country, index) => (
          <div
            key={index}
            className="search-result"
            onClick={() => handleSearchResultClick(country)}
          >
            {country}
          </div>
        ))}
      </div>
    );
  };

  const handleSearchResultClick = async (country) => {
    try {
      const response = await axios.get(
        `https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json`
      );
      const capital = response.data[country];
      alert(`${country} - ${capital}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h1>Country Search</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchText}
          onChange={handleSearchChange}
        />
        {loading && <div className="activity-indicator"></div>}
      </div>
      {searchResults.length > 0 && renderSearchResults()}
    </div>
  );
}

export default SearchBar;
