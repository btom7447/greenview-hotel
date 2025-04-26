import Breadcrumb from '@/components/Breadcrumb'
import ReservationsSuspenseWrapper from '@/components/ReservationsSuspenseWrapper'
import React from 'react'

const page = () => {
    return (
        <div className='bg-white'>
            <Breadcrumb title="Reservations" />
            <ReservationsSuspenseWrapper />
        </div>
    )
}

export default page