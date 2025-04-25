import Breadcrumb from '@/components/Breadcrumb'
import CheckAvailabilitySection from '@/components/CheckAvailabilitySection'
import React from 'react'

const page = () => {
    return (
        <div className='bg-white'>
            <Breadcrumb title="Reservations" />
            <CheckAvailabilitySection />
        </div>
    )
}

export default page