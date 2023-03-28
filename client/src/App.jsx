import React, { useEffect, useState } from 'react';
// React Router
import { Routes, Route } from 'react-router-dom';
// Pages
import { Login, Properties, Register, SingleProperty } from './pages'
// Components
import { Header, Sidebar } from './components';
// Utils
import { request } from './util/fetchApi';


const App = () => {
  const [allProperties, setAllProperties] = useState([]);

  // Fetch All Properties
  useEffect(() => {
    const fetchAllProperties = async () => {
      const data = await request(`/property/getAll`, 'GET');
      setAllProperties(data);
    }

    fetchAllProperties();
  }, []);

  return (
    <div className='flex bg-[#F5F6FA] min-h-screen'>
        {/* Left Side */}
        <div className='bg-white w-[25%] md:w-[20%] h-screen border-r-[1px]'>
          <Sidebar />
        </div>
        {/* Right Side */}
        <div className='w-[85%] h-screen px-8 overflow-auto'>
          <Header allProperties={allProperties}/>

          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Properties allProperties={allProperties} />} />
            <Route path='/:id' element={<SingleProperty /> } />
          </Routes>
        </div>
    </div>
  )
}

export default App