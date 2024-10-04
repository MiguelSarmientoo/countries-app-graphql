import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFilter } from 'react-icons/fa';
import { GET_COUNTRIES, GET_COUNTRY } from '../graphql/queries';
import { fetchCountryImage } from '../services/unsplashService';
import CountryCard from './CountryCard';
import CountryDetails from './CountryDetails';
import '../styles/CountryList.css';

function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [getCountry, { data: countryData }] = useLazyQuery(GET_COUNTRY);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [continentFilters, setContinentFilters] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [countryImages, setCountryImages] = useState({});
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const savedImages = localStorage.getItem('countryImages');
    if (savedImages) {
      setCountryImages(JSON.parse(savedImages));
    }
  }, []);

  useEffect(() => {
    if (data) {
      let countries = data.countries;

      if (searchQuery) {
        countries = countries.filter(country =>
          country.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (continentFilters.length > 0) {
        countries = countries.filter(country =>
          continentFilters.includes(country.continent.name.toLowerCase())
        );
      }

      setFilteredCountries(countries);

      const loadImages = async () => {
        const images = {};
        for (const country of countries) {
          if (!countryImages[country.name]) {
            const imageUrl = await fetchCountryImage(country.name);
            images[country.name] = imageUrl;
          }
        }
        const updatedImages = { ...countryImages, ...images };
        setCountryImages(updatedImages);
        localStorage.setItem('countryImages', JSON.stringify(updatedImages));
      };

      loadImages();
    }
  }, [data, searchQuery, continentFilters, countryImages]);

  useEffect(() => {
    if (countryData && countryData.country) {
      setSelectedCountry(countryData.country);
    }
  }, [countryData]);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  const handleContinentChange = (e) => {
    const selectedContinent = e.target.value.toLowerCase();
    setContinentFilters(prev =>
      prev.includes(selectedContinent)
        ? prev.filter(continent => continent !== selectedContinent)
        : [...prev, selectedContinent]
    );
  };

  const clearFilters = () => {
    setContinentFilters([]);
  };

  const handleCardClick = (code) => {
    getCountry({ variables: { code } });
  };

  const closeDetails = () => {
    setSelectedCountry(null);
  };

  return (
    <Container fluid className="main-content">
      <Row>
        <Col xs={12} md={6}>
          <Form.Control
            type="text"
            placeholder="Search countries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </Col>
        <Col xs={12} md={6} className="text-end">
          <Button variant="light" onClick={toggleFilter} style={{ cursor: 'pointer' }}>
            <FaFilter size={24} /> Filter
          </Button>
        </Col>
      </Row>

      {filterVisible && (
        <Row className="mt-3">
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Filter by continent</Form.Label>
              <div>
                {['Africa', 'North America', 'South America', 'Asia', 'Europe', 'Oceania'].map((continent) => (
                  <Form.Check
                    key={continent}
                    type="checkbox"
                    label={continent}
                    value={continent}
                    checked={continentFilters.includes(continent.toLowerCase())}
                    onChange={handleContinentChange}
                  />
                ))}
              </div>
            </Form.Group>
            <Button variant="secondary" onClick={clearFilters} className="mt-2">
              Clear Filters
            </Button>
          </Col>
        </Row>
      )}

      <Row className="mt-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <Col xs={12} md={6} lg={4} key={country.code} className="mb-4">
              <CountryCard
                country={country}
                image={countryImages[country.name]} 
                onClick={() => handleCardClick(country.code)}
                isSelected={selectedCountry && selectedCountry.code === country.code}
              />
            </Col>
          ))
        ) : (
          <p>No countries found</p>
        )}
      </Row>

      {selectedCountry && (
        <div className="overlay" onClick={closeDetails}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <CountryDetails
              country={selectedCountry}
              countryImage={countryImages[selectedCountry.name]}  
              countryCode={selectedCountry.code}
              countryFlag={`https://flagsapi.com/${selectedCountry.code}/flat/64.png`}
            />
            <Button variant="secondary" onClick={closeDetails}>Close</Button>
          </div>
        </div>
      )}
    </Container>
  );
}

export default CountryList;
