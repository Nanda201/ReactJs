import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import home from './components/home';

class NavBar extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
          <ul>
              <li>
                  <Link to="/home">Home</Link>
              </li>
              <li>
                  <Link to="/service">service</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
                  <Link to="/contact">Contact</Link>
              </li>

          </ul>
          <Routes>
              <Route path="/" element={<home/>} />
              <Route path="Sevice" element={<service/>} />
          </Routes>
          </BrowserRouter>
      </div>
    );
  }
}

export default NavBar;
