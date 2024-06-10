import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export const NavBar = (): JSX.Element => {
  return (
    <div className='NavBar'>
      <ul>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/plans'>Price Plans</Link>
        </li>
        <li>
          <Link to='/pages'>Pages</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
