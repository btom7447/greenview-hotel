import React from 'react';
import CheckAvailabilityForm from './CheckAvailabilityForm';

const HeroSection = () => {
    return (
        <header>
            <section>
                <div className='relative'>
                    <div
                        className='h-[120dvh] xl:h-[150dvh]'
                        style={{
                            backgroundImage: "url('/images/hero-image.jpg')",
                            backgroundPosition: 'bottom',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                            overflowY: 'auto',
                        }}
                        role="img"
                        aria-label="A scenic view of the Greenview Hotel"
                    >
                        <div className='flex flex-col items-center justify-center h-full bg-black/50 p-20'>
                            <h1 className='text-white text-3xl lg:text-5xl 2xl:text-8xl mt-40'>
                                Enjoy Your Stay here at
                            </h1>
                            <h2 className='text-white text-6xl text-center lg:text-7xl 2xl:text-8xl mt-2'>
                                Greenview Hotel Ltd
                            </h2>
                        </div>
                    </div>
                    <CheckAvailabilityForm />
                </div>
            </section>
        </header>
    );
};

export default HeroSection;