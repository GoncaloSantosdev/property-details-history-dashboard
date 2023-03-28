import React from 'react';
// React Router
import { Link } from 'react-router-dom';

const PropertiesList = ({ allProperties }) => {
  // Truncate String 
  const truncate = (str, length) => {
    return str.length > length
    ? `${str.substr(0, length)}...`
    : str;
  }

  console.log(allProperties);
  return (
    <div className='flex flex-wrap space-y-4 lg:space-y-0 lg:space-x-4 mt-6'>
      {allProperties.map((property) => (
        <Link to={`/${property._id}`} key={property._id}>
          <div className='w-full shadow-md'>
            <img src={property.image} alt='House Picture' className='w-full h-[30vh] object-cover rounded cursor-pointer'/>
            <div className='bg-white px-4 py-4'>
              <div className='flex items-center justify-between'>
                <h2 className='font-semibold'>{truncate(property.title, 20)}</h2>
                <p>{property.price}</p>
              </div>
              <p className='mt-3 text-sm'>{property.address}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PropertiesList