// src/App.js

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/SideBar';
import CountryList from './components/CountryList';
import Vista1 from './components/Vista1';
import Vista2 from './components/Vista2';
import client from './apollo/apolloClient';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<CountryList />} />
              <Route path="/vista1" element={<Vista1 />} />
              <Route path="/vista2" element={<Vista2 />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
