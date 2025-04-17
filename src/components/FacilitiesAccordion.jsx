"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FacilitiesAccordion = ({ facility }) => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleAccordion = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    return (
        <>
            {facility.menu && (
                <div
                    className="mt-10 py-10 border-t border-gray-300"
                    aria-labelledby="menu-heading"
                >
                    <h3
                        id="menu-heading"
                        className="text-2xl md:text-4xl font-semibold text-gray-800"
                    >
                        Menu
                    </h3>

                    {facility.menu.map((category, index) => {
                        const isOpen = openCategory === category.category;
                        const panelId = `accordion-panel-${index}`;
                        const buttonId = `accordion-button-${index}`;

                        return (
                            <div key={category.category} className="mt-4">
                                {/* Accordion Header */}
                                <button
                                    id={buttonId}
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => toggleAccordion(category.category)}
                                    className="py-5 px-10 w-full flex justify-between items-center uppercase text-left text-2xl font-semibold border-b border-gray-300 bg-gray-100 text-black hover:bg-black hover:text-[#E4BF3B] cursor-pointer"
                                >
                                    {category.category}
                                    {isOpen ? (
                                        <ChevronUp size={28} />
                                    ) : (
                                        <ChevronDown size={28} />
                                    )}
                                </button>

                                {/* Accordion Content */}
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    aria-hidden={!isOpen}
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        isOpen ? 'max-h-[1000px]' : 'max-h-0'
                                    }`}
                                >
                                    <ul className="py-10 px-0 md:px-10">
                                        {category.items.map((item, idx) => (
                                            <li
                                                key={`${category.category}-${idx}`}
                                                className="mb-5 pb-5 w-full flex justify-between items-center gap-20 border-b border-gray-200"
                                            >
                                                <p className="text-2xl text-black font-light leading-loose">
                                                    {item.name}
                                                </p>
                                                <p className="w-32 text-left text-2xl text-black font-light leading-loose">
                                                    {item.price}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default FacilitiesAccordion;