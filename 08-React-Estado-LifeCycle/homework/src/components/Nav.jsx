import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <img src={Logo} alt='logo de Henry'/>
      <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
