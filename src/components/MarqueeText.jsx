import React from 'react';

const MarqueeText = () => {
    const marqueeStyle = {
        animation: 'marquee 30s linear infinite',
        display: 'inline-block',
        whiteSpace: 'nowrap',
    };

    const containerStyle = {
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
    };

    return (
        <div style={containerStyle} className='py-20 bg-white'>
            <h3 style={marqueeStyle} className="text-8xl font-bold text-center text-black">
                Greenview Hotel Ltd - Book your stay today! - Explore our amazing services! Greenview Hotel Ltd - Book your stay today! - Explore our amazing services!
            </h3>
        </div>
    );
};

export default MarqueeText;
