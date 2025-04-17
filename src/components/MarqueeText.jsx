import { Star } from 'lucide-react';
import React from 'react';

const MarqueeText = () => {
    const content = (
        <>
            <h5 className="text-[#E4BF3B]" aria-hidden="true">Greenview Hotel Ltd</h5>
            <Star size={32} fill="#E4BF3B" className="text-[#E4BF3B]" aria-hidden="true" />
            <h5 className="text-transparent custom-stroke" aria-hidden="true">Greenview Hotel Ltd</h5>
            <Star size={32} fill="#E4BF3B" className="text-[#E4BF3B]" aria-hidden="true" />
        </>
    );

    return (
        <section className="relative w-full overflow-hidden bg-white py-12" role="presentation" aria-hidden="true">
            <div className="flex items-center w-max animate-marquee gap-6 text-5xl md:text-8xl font-semibold whitespace-nowrap">
                {content}
                {content}
                {content}
            </div>
        </section>
    );
};

export default MarqueeText;