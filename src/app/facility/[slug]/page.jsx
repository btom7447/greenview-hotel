'use client';
import Breadcrumb from '@/components/Breadcrumb';
import facilitiesData from '../../../data/facilities.json';
import { use } from 'react';
import FacilitiesAccordion from '@/components/FacilitiesAccordion';
import Image from 'next/image';

const FacilityPage = ({ params }) => {
    const { slug } = use(params);

    const facility = facilitiesData.find(f =>
        f.title.toLowerCase().replace(/\s+/g, '-') === slug
    );

    if (!facility) return <div>Facility Not Found</div>;

    return (
        <>
            <Breadcrumb title={facility.title} subTitle="Facilities" link="/facility" />
            <section className="py-20 px-7 sm:px-10 xl:px-20 4xl:px-50 bg-white">
                <h2 className="mb-5 text-3xl md:text-5xl font-semibold text-gray-800">{facility.title}</h2>
                <p className="text-xl lg:text-2xl text-black font-light leading-loose">{facility.subtitle}</p>
                <div className='w-full h-100 lg:h-150 relative'>
                    <Image
                        src={facility.image}
                        alt={`Image of ${facility.title} at Greenview Hotel`}
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 1204px) 100vw, 50vw"
                        className="object-cover object-center"
                    />
                </div>
                {/* Pass the individual facility object */}
                <FacilitiesAccordion facility={facility} />
            </section>
        </>
    );
};

export default FacilityPage;