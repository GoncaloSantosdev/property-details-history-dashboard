import React from 'react';
// Images
import building from '../../../assets/building.svg';
import bed from '../../../assets/bed.svg';
import bath from '../../../assets/bath.svg';
import car from '../../../assets/car.svg';
import sqft_1 from '../../../assets/sqft1.svg';
import sqft_2 from '../../../assets/sqft2.svg';

const Amenities = ({ property }) => {
  return (
    <div className='bg-white flex items-center py-3 px-4'>
      <div className='flex space-x-6'>
        <div className='text-sm flex flex-col items-center'>
          <img className='h-4 w-4' src={building} alt="building icon" />
          {property.type}
        </div>
        <div className='text-sm flex flex-col items-center'>
          <img className='h-4 w-4' src={bed} alt="bed icon" />
          {property.bedrooms} Bedrooms
        </div>
        <div className='text-sm flex flex-col items-center'>
          <img className='h-4 w-4' src={bath} alt="bath icon" />
          {property.bathrooms} Bathrooms
        </div>
        <div className='text-sm flex flex-col items-center'>
          <img className='h-4 w-4' src={car} alt="car icon" />
          {property.garages} Garage
        </div>
        <div className='text-sm flex flex-col items-center'>
          <img className='h-4 w-4' src={sqft_1} alt="sq ft icon" />
          {property.sqft_1} sq.ft
        </div>
        <div className='text-sm flex flex-col items-center'>
          <img className='h-4 w-4' src={sqft_2} alt="sq ft icon" />
          {property.sqft_2} sq.ft
        </div>
      </div>
    </div>
  )
}

export default Amenities