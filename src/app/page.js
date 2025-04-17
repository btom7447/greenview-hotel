"use client";

import AmenitiesSection from '@/components/AmenitiesSection'
import HeroSection from '@/components/HeroSection'
import WelcomeSection from '@/components/WelcomeSection'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'leaflet/dist/leaflet.css';
import TestimonialSection from '@/components/TestimonialSection';
import PromoVideoSection from '@/components/PromoVideoSection';
import CatalogSection from '@/components/CatalogSection';
import FacilitiesSection from '@/components/FacilitiesSection';

const Home = () => {

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  return (
    <div className='relative'>
      <HeroSection />
      <WelcomeSection />
      <CatalogSection />
      <PromoVideoSection />
      <AmenitiesSection />
      <FacilitiesSection />
      <TestimonialSection />
    </div>
  )
}

export default Home