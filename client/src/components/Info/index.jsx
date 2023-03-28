import React from 'react'

const Info = ({ property }) => {
  return (
    <div className='bg-white px-4 py-4 lg:mt-4 rounded w-[100%]'>
      <div className='flex justify-between items-center'>
        {property.forSale ? <p className='bg-[#5EB182] text-sm px-3 py-2 text-white rounded'>For Sale</p> : <p>Not For Sale</p>}
        <button className='bg-[#2E63F6] text-white text-sm py-2 px-3 rounded'>Add List</button>
      </div>

      <div className='mt-4'>
        <p className='font-semibold'>MLS#: {property.propertyId}</p>
        <p className='text-sm text-[#555B67]'>Listed for: <span className='text-[#2E63F6]'>{property.price}</span></p>
        <p className='mt-2 text-sm w-[80%]'>{property.address}</p>
      </div>

      <div className='flex flex-col items-start text-[#555B67] space-y-3 mt-3'>
          <button className='border rounded w-full text-left py-3 px-4 text-sm'>View on Map</button>
          <button className='border rounded w-full text-left py-3 px-4 text-sm'>Get Directions</button>
          <button className='border rounded w-full text-left py-3 px-4 text-sm'>Share</button>
          <button className='border rounded w-full text-left py-3 px-4 text-sm'>My Notes</button>
      </div>

      <div className='bg-[#F5F6FA] py-3 px-4 mt-3 rounded'>
        <span className='text-sm'>Listing Agent</span>
        <p className='font-semibold my-2'>{property?.currentOwner?.username}</p>
        <p>+ {property?.currentOwner?.phoneNumber}</p>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Info