// src/services/unsplashService.js

const UNSPLASH_BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export const fetchCountryImage = async (countryName) => {
  try {
    const query = `${countryName} landscape`;
    const response = await fetch(`${UNSPLASH_BASE_URL}/search/photos?query=${encodeURIComponent(query)}&client_id=${ACCESS_KEY}`);
    const data = await response.json();
    return data.results[0]?.urls?.regular || '';
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
    return '';
  }
};
