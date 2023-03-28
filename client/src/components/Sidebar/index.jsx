import React from 'react';
// React Router
import { Link } from 'react-router-dom';
// Data
import { navData } from '../../data/navData';
// Icons
import { PlusIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';
// Image
import logo from '../../assets/logo.svg';

const Sidebar = () => {
  return (
    <div className='pt-11 px-4'>
      <img src={logo} alt="Logo" />

      <div className='mt-6'>
        <button className='w-full flex items-center justify-center px-4 py-4 bg-[#2E63F6] text-white rounded create-tour-btn'>
          <PlusIcon className='w-5 h-5 md:ml-2'/>
        </button>        
      </div>

      <nav className='flex flex-col items-center md:items-start mt-6'>
        {navData.map((navItem, index) => (
          <li key={index} className={`list-none flex items-center justify-center md:justify-start md:px-2 py-4 cursor-pointer w-full ${navItem.selected ? 'bg-[#2E63F6] text-white rounded' : ''}`}>
            <span className='w-6 h-6'>{React.createElement(navItem.icon)}</span>
            <Link to={navItem.path} className={`hidden md:block ml-2 ${navItem.selected ? 'text-white' : 'text-[#555B67]'}`}>{navItem.title}</Link>
          </li>
        ))}
      </nav>

      <div className='hidden md:block md:absolute md:bottom-6'>
        <span>Need Help?</span>
        <span className='flex items-center mt-2'><QuestionMarkCircleIcon className='w-6 h-6'/><span className='ml-2 font-semibold'>Help Desk</span></span>
      </div>

    </div>
  )
}

export default Sidebar