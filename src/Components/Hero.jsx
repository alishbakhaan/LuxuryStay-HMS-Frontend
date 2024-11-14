import React from 'react'
import background from '../../public/assets/bg.mp4'
import Slider from './Slider'
import CheckInForm from './CheckInForm'

const Hero = () => {
    return (
        <div className="relative">
            
            <video
                autoPlay
                loop
                muted
                className="w-full h-[80vh] object-cover"
            >
                <source
                    src={background}
                    type="video/mp4"
                />
            </video>

            {/* opacity */}
            <div className="absolute inset-0 bg-black opacity-70"></div>

            {/* Text */}
            <div className="absolute md:top-[20%] sm:top-20 top-10 left-0 right-0 md:px-20 px-4 space-y-5">
                <h1 className='md:text-8xl sm:text-6xl text-4xl text-white font-bold'>Luxury Stay</h1>
                <p className='text-white  max-w-2xl md:text-base text-sm leading-tight'>
                Welcome to Luxury Stays Hotel, where elegance meets comfort in an unforgettable setting.
                Located in the heart of the city yet surrounded by serene landscapes,
                Each of our beautifully designed rooms is crafted with your relaxation in mind, offering modern amenities and breathtaking views.
                we aim to exceed your expectations
                and make your stay truly luxurious.
                </p>
            </div>

            <div className="absolute md:top-3/4 top-[60%] left-0 right-0 transform -translate-y-1/2 m-2">
                <Slider />
            </div>
            <div className="absolute left-0 right-0 transform -translate-y-1/2">
                <CheckInForm />
            </div>
        </div>
    )
}

export default Hero
