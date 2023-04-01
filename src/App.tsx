import React from 'react';
import './App.css';
import TopBanner from './Banner';
import MovieList from './Movies';
import Podcasts from './Podcasts';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    // links to the other pages
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Podcasts" className="nav-link">
              Podcasts
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<TopBanner saying="Joel Hilton's Movie Website" />}
        />
        <Route path="/Movies" element={<MovieList />} />
        <Route path="/Podcasts" element={<Podcasts />} />
      </Routes>
    </>
  );
}

export default App;
