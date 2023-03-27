import React from 'react';
// React Router
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Real Estate Dashboard</h1>
      <div>
        <Link to='/'>Log In</Link>        
        <Link to='/'>Register</Link>        
      </div>
    </header>
  )
}

export default Header