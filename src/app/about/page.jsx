import AmenitiesSection from '@/components/AmenitiesSection'
import Breadcrumb from '@/components/Breadcrumb'
import FacilitiesSection from '@/components/FacilitiesSection'
import StaffSection from '@/components/StaffSection'
import TestimonialSection from '@/components/TestimonialSection'
import WelcomeSection from '@/components/WelcomeSection'
import React from 'react'

const AboutPage = () => {
  return (
    <div className=''>
      <Breadcrumb title="About" />
      <WelcomeSection />
      <StaffSection />
      <AmenitiesSection />
      <FacilitiesSection />
      <TestimonialSection />
    </div>
  )
}

export default AboutPage;