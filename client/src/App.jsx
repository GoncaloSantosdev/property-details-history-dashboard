import React from 'react';
// React Router
import { Routes, Route } from 'react-router-dom';
// Pages
import { Properties, SingleProperty } from './pages'
// Components
import { Header, Sidebar } from './components';

const App = () => {
  return (
    <div className='flex bg-[#F5F6FA] min-h-screen'>
        {/* Left Side */}
        <div className='bg-white w-20 md:w-80 h-screen border-r-[1px]'>
          <Sidebar />
        </div>
        {/* Right Side */}
        <div className='w-full px-8'>
          <Header />

          <Routes>
            <Route path='/' element={<Properties />} />
            <Route path='/:id' element={<SingleProperty /> } />
          </Routes>
        </div>
    </div>
  )
}

export default App