import React from 'react';
import FacilityCard from './FacilityCard';
import facilitiesData from '../data/facilities.json';

const FacilitiesSection = () => {
    return (
        <section 
            className='px-6 sm:px-8 md:px-10 xl:px-12 bg-white py-16 flex flex-col items-stretch'
            aria-labelledby="facility-catalog-heading"
        >
            {facilitiesData.map((facility, index) => (
                <FacilityCard 
                    key={index} 
                    facility={facility}
                    isReversed={index % 2 !== 0}
                />
            ))}
        </section>
    );
};

export default FacilitiesSection;