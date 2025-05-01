import React from 'react'
import staffData from "../data/staff.json";
import StaffCard from './StaffCard';

const StaffSection = () => {
    return (
        <section
            aria-labelledby="staff-section"
            className="bg-white py-20 px-7 sm:px-10 xl:px-20 4xl:px-50 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-10 gap-y-20"
        >
            {staffData.map((staff, index) => (
                <StaffCard
                    key={index}
                    staff={staff}
                />
            ))}

        </section>
    )
}

export default StaffSection