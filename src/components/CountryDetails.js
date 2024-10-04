// src/components/CountryDetails.js
import React from 'react';
import '../styles/CountryDetails.css';

const CountryDetails = ({ country, countryImage, countryCode }) => {
  if (!country) return null;

  return (
    <div className="country-details">
      <h3>{country.name}</h3>
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Native Name:</strong> {country.native}</p>

      <div className="flag-container">
        {countryCode ? (
          <>
            <img
              src={`https://flagsapi.com/${countryCode}/flat/64.png`}
              alt={`Flat flag of ${country.name}`}
              className="country-flag"
            />
          </>
        ) : (
          <span>No flag available</span>
        )}
      </div>

      <div className="country-image-container">
        {countryImage ? (
          <img
            src={countryImage}
            alt={`Landscape of ${country.name}`}
            className="country-image"
          />
        ) : (
          <span>No image available</span>
        )}
      </div>

      <p><strong>Currency:</strong> {country.currency}</p>
      <p><strong>Continent:</strong> {country.continent.name}</p>

      <div className="language-list">
        <strong>Languages:</strong>
        {country.languages.map((lang) => (
          <span key={lang.code} className="language-item">{lang.name}</span>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
