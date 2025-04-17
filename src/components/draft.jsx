import { Star } from 'lucide-react';
import React from 'react';

const MarqueeText = () => {
    return (
        <div className="relative w-full overflow-hidden bg-white py-12">
            <div className="flex items-center animate-marquee gap-6 text-4xl md:text-9xl font-bold whitespace-nowrap">
                <h5 className="text-black">Greenview Hotel Ltd</h5>
                <Star size={32} fill='#000' className="text-black" />
                
                <h5 className="text-transparent stroke-text">Greenview Hotel Ltd</h5>
                <Star size={32} strokeWidth={2} className="text-black" />
                
                <h5 className="text-black">Greenview Hotel Ltd</h5>
                <Star size={32} className="text-[#e4bf3b55]" />
                
                <h5 className="text-transparent stroke-text">Greenview Hotel Ltd</h5>
                <Star size={32} strokeWidth={2} className="text-black" />
            </div>
        </div>
    );
};

export default MarqueeText;