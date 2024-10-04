// src/components/SearchBar.js

import React from 'react';
import { Form } from 'react-bootstrap';

function SearchBar({ onSearch }) {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <Form.Control
      type="text"
      placeholder="Search for a country"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
