import { Quote } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="bg-white p-10 shadow-md flex flex-col justify-between items-stretch h-full">
            <Quote size={40} fill='#E4BF3B' color='#E4BF3B' />
            <p className="text-black text-2xl md:text-3xl text-left leading-relaxed mt-10">{testimonial.feedback}</p>
            <div className="mt-10 pt-10 flex items-center border-t-1 border-gray-300">
                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    unoptimized
                    className="w-20 h-20 object-cover rounded-full"
                />
                <div className="ml-4">
                    <h4 className="text-2xl text-black text-left font-semibold">{testimonial.name}</h4>
                    <p className="text-lg text-gray-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;