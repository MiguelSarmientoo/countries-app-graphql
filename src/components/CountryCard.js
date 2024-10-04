// src/components/CountryCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/CountryList.css';

function CountryCard({ country, image, onClick, isSelected }) {
  return (
    <Card 
      className={`country-card ${isSelected ? 'selected' : ''}`} 
      onClick={() => onClick(country.code)}
    >
      <div className="country-card-header">
        {image ? (
          <img
            src={image}
            alt={`Scenic view of ${country.name}`}
            className="country-image"
          />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
        <Card.Text>
          <div className="country-info">
            <div className="flag-wrapper">
              <img
                src={`https://flagsapi.com/${country.code}/flat/64.png`}
                alt={`Flag of ${country.name}`}
                className="country-flag"
              />
            </div>
            <div>
              <strong>Continent:</strong> {country.continent.name}
            </div>
            <div>
              <strong>Capital:</strong> {country.capital || 'N/A'}
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CountryCard;
