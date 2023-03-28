import React from 'react';
import shortcuts from '../../assets/shortcuts.svg';

const Shortcuts = () => {
  return (
    <div className='bg-white mt-4 lg:mt-0 px-4 py-4 rounded'>
    <div className='flex justify-between items-center'>
      Shortcuts
      <img src={shortcuts} alt='shortcuts icon' className='w-4 h-4'/>
    </div>

    <div className='flex flex-col items-start text-[#555B67] space-y-3 mt-3'>
        <div className='flex items-center justify-between w-full'>
          <button className='border rounded text-left py-3 px-3 text-sm bg-[#F5F6FA] text-black'>Notify Similar Properties </button>
          <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600 rounded-sm border-gray-300 focus:ring-2 focus:ring-indigo-500" />
        </div>
        <button className='border rounded w-full text-left py-3 px-3 text-sm bg-[#2E63F6] text-white'>Key Facts</button>
        <button className='border rounded w-full text-left py-3 px-3 text-sm'>Property History</button>
        <button className='border rounded w-full text-left py-3 px-3 text-sm'>Demographics</button>
        <button className='border rounded w-full text-left py-3 px-3 text-sm'>Points of interest</button>
    </div>
  </div>
  )
}

export default Shortcuts