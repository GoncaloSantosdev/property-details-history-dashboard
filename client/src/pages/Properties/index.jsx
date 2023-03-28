import React from 'react';
// Components
import PropertiesList from '../../components/PropertiesList';

const Properties = ({ allProperties }) => {
  return (
    <section>
      <PropertiesList allProperties={allProperties}/>
    </section>
  )
}

export default Properties