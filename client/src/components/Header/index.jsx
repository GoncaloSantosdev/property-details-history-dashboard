import React from 'react';
// React Router
import { Link, useNavigate } from 'react-router-dom';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
// React icons
import { BellIcon, ArrowRightOnRectangleIcon, MagnifyingGlassIcon, Cog6ToothIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const {user} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login');
  }

  return (
    <header className='flex justify-between items-center pt-11'>
      <div className='hidden md:block'>
        <h1 className='text-xl'>Real Estate Dashboard</h1>
      </div>

      <div className='flex items-center justify-end flex-1'>
        {!user ? 
          <>
            <Link to='/login' className='mr-4'>Log In</Link>        
            <Link to='/register' className='bg-[#2E63F6] text-white rounded px-4 py-2'>Register</Link>        
          </>
          :
          <div className='flex items-center space-x-6'>
            <div className='hidden md:flex space-x-4'>
              <BellIcon className='w-6 h-6 cursor-pointer'/>
              <MagnifyingGlassIcon className='w-6 h-6 cursor-pointer'/>
              <Cog6ToothIcon className='w-6 h-6 cursor-pointer'/>
              <ArrowRightOnRectangleIcon className='w-6 h-6 cursor-pointer' onClick={handleLogout}/>
            </div>

            <div className='flex items-center space-x-2'>
              <img src={`http://localhost:5000/images/${user?.profileImg}`} alt='Profile Image' className='w-12 h-12 rounded-full cursor-pointer' onClick={handleLogout}/>
              <div className='flex flex-col'>
                <span>{user.username}</span>
                <span className='text-sm text-[#656B8A]'>{user.email}</span>
              </div>
            </div>

            <ChevronDownIcon className='hidden md:block w-6 h-6 cursor-pointer'/>
          </div> 
        }
      </div>
    </header>
  )
}

export default Header