import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../index.css';

// import required modules
import { Autoplay } from 'swiper/modules';

// import images
import img2 from '../assets/img2.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img11 from '../assets/img11.jpg'
import img12 from '../assets/img12.jpg'
import img16 from '../assets/img16.jpg'

const swiperarray = {
  slides: [
    {
      name: 'Bath Relaxation',
      href: '#',
      imageSrc: img11,
    },
    {
      name: 'Family Room',
      href: '#',
      imageSrc: img12,
    },
    {
      name: 'Penthouse Suite',
      href: '#',
      imageSrc: img2,
    },
    {
      name: 'Lounge & Bar',
      href: '#',
      imageSrc: img16,
    },
    {
      name: 'Fitness Center',
      imageSrc: img8,
    },
    {
      name: 'Junior Suite',
      imageSrc: img5,
    },
    {
      name: 'Meeting Room',
      imageSrc: img6,
    },
    {
      name: 'Dining Area',
      imageSrc: img7,
    },


  ]
}


export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
    breakpoints={{
    
    768: {
      slidesPerView: 4,
    },
    425: {
      slidesPerView: 2, 
    },
    
    0: {
      slidesPerView: 1, 
    },
  }}

        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        className="mySwiper"
      >

        <div>
          {swiperarray.slides.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="backdrop-blur-sm bg-white bg-opacity-20 border text-gray-900 rounded-md w-full p-2">

                <div className="flex gap-5">
                  <div className=''>
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                    />

                  </div>
                  <div className=''>
                    <h1 className='text-left pb-2 font-bold capitalize leading-none text-sm text-white'>{item.name}</h1>
                    <p className='text-left text-sm leading-none text-white font-light '>
                      Indulge in exquisite luxury and comfort at our premier hotel retreat.
                    </p>
                  </div>

                </div>
              </div>

            </SwiperSlide>
          ))}
        </div>

      </Swiper>
    </>
  );
}
