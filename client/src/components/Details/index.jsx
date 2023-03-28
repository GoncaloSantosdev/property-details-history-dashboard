import React from 'react';
// Components
import Amenities from './Amenities';
import AditionalInfo from './AditionalInfo';

const Details = ({ property }) => {
  return (
  <>
    {/* Amenities */}
    <div className='hidden lg:block'>
      <Amenities property={property}/>
    </div>
    {/* Facts, Details, Rooms */}
    <div>
      <AditionalInfo property={property}/>
    </div>
  </>
  )
}

export default Details