import React, { Component } from 'react'
import '../assets/styles/Navbar.css';
import { Router, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul className='list-group'>
          <li className='list-group-item'><NavLink exact activeClassName="active" to='/'>Search</NavLink></li>
          <li className='list-group-item'><NavLink to='/favorites'>Favorites</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;