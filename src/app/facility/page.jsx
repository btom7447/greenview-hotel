import Breadcrumb from '@/components/Breadcrumb'
import FacilitiesSection from '@/components/FacilitiesSection'
import React from 'react'

const page = () => {
    return (
        <div>
            <Breadcrumb title="Facilities" />
            <FacilitiesSection />
        </div>
    )
}

export default page