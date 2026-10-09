import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  
  const activeStyle = ({ isActive }) => ({
    color: isActive ? '#ff6347' : '#fff',
    fontWeight: isActive ? 'bold' : 'normal',
    marginRight: '15px',
    textDecoration: 'none'
  });

  return (
    <nav style={{ padding: '15px', backgroundColor: '#333', color: '#fff' }}>
      <h2>🍽️ Recipe Finder</h2>
      <NavLink to="/" style={activeStyle}>Home</NavLink>
      <NavLink to="/recipes" style={activeStyle}>Recipes</NavLink>
      <NavLink to="/favourites" style={activeStyle}>Favourites</NavLink>
    </nav>
  );
};

export default Navbar;