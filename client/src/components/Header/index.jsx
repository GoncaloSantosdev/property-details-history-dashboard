import React from 'react';
// React Router
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex justify-between items-center pt-11'>
      <div className='hidden md:block'>
        <h1 className='text-xl'>Real Estate Dashboard</h1>
      </div>

      <div className='flex items-center justify-end flex-1'>
        <Link to='/' className='mr-4'>Log In</Link>        
        <Link to='/' className='bg-[#2E63F6] text-white rounded px-4 py-2'>Register</Link>        
      </div>
    </header>
  )
}

export default Header