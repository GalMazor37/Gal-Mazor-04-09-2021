import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className='appHeader'>
    <h1>Weather</h1>
    <NavLink to='/' activeClassName='is-active' exact={true} className='navBarStyle'>
      Weather
    </NavLink>
    <NavLink to='/favorites' activeClassName='is-active' className='navBarStyle'>
      Favorites
    </NavLink>
  </header>
);

export default Header;
