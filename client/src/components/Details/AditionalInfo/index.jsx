import React from 'react'

const AditionalInfo = ({ property }) => {
  return (
    <div className='bg-white rounded'>
      <div className='flex justify-between py-3 px-8 border-b'>
          <p>Key Facts</p>
          <p>Details</p>
          <p>Rooms</p>
      </div>

      <div className='px-3 py-8'>
        <p className='text-sm text-[#555B67]'>{property.description}</p>
        <div className='space-y-4 mt-4 text-[#555B67] text-sm'>
          <div className='flex justify-between items-center border-b'>
            <span>Tax</span>
            <span className='text-black'>{property.tax}</span>
          </div>
          <div className='flex justify-between items-center border-b'>
            <span>Type</span>
            <span className='text-black'>{property.propertyType}</span>
          </div>
          <div className='flex justify-between items-center border-b'>
            <span>Building Age</span>
            <span className='text-black'>{property.buildingAge} year</span>
          </div>
          <div className='flex justify-between items-center border-b'>
            <span>Size</span>
            <span className='text-black'>{property.size} feet2</span>
          </div>
          <div className='flex justify-between items-center border-b'>
            <span>Parking</span>
            <span className='text-black'>{property.parking}</span>
          </div>
          <div className='flex justify-between items-center border-b'>
            <span>Basement</span>
            <span className='text-black'>{property.basement ? <span>Finished</span> : <span>Unfinished</span>}</span>
          </div>
          <div className='flex justify-between items-center border-b'>
            <span>MLS#</span>
            <span className='text-black'>{property.propertyId} day</span>
          </div>
          <div className='flex justify-between items-center border-b'>
            <span>Possession</span>
            <span className='text-black'>{property.tax}</span>
          </div>
        </div>
        <p className='font-semibold mt-3'>Description</p>
        <p className='text-sm text-[#555B67] mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellendus, aliquam rem reprehenderit ad necessitatibus qui dolorum dolor quia ullam dignissimos mollitia alias nisi saepe ut. Atque accusantium nam quo.</p>
      </div>
    </div>
  )
}

export default AditionalInfo