import React, { useEffect, useState } from 'react';
// React Router
import { useLocation } from 'react-router-dom';
// Components
import { Info, Details, Shortcuts } from '../../components';
// Utils
import { request } from '../../util/fetchAPI';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useIsDesktop } from '../../hooks/useIsDesktop';

const SingleProperty = () => {
  const [property, setProperty] = useState({});
  const { isDesktop } = useIsDesktop();
  const location = useLocation();
  
    // Fetch Single Property
    useEffect(() => {
      const fetchPropertyDetails = async () => {
        const data = await request(`/property/find${location.pathname}`, 'GET');
        setProperty(data);
      }
  
      fetchPropertyDetails();
    }, []);

    console.log(property);

  return (
    <section className='mt-6 w-full'>
      <Swiper
          slidesPerView={isDesktop ? 3 : 1}
          spaceBetween={10}
          loop={true}
          loopFillGroupWithBlank={true}
          centeredSlides={true}
          autoplay={{ delay: 2000 }}
          pagination={{ dynamicBullets: true }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"

        >
          {property?.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt='Image Slider' className='w-full h-[30vh] rounded'/>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='mt-4 flex flex-col lg:flex-row lg:justify-between lg:space-x-6 mb-6'>
          {/* Left */}
          <div className='w-[100%]'>
            <Info property={property}/>
          </div>

          {/* Middle */}
          <div className='w-[100%] mt-4'>
            <Details property={property}/>
          </div>

          {/* Right */}
          <div className='w-[100%] mt-4'>
            <Shortcuts />
          </div>
        </div>
    </section>

  )
}

export default SingleProperty