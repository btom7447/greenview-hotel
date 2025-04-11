"use client";

import AmenitiesSection from '@/components/AmenitiesSection'
import HeroSection from '@/components/HeroSection'
import WelcomeSection from '@/components/WelcomeSection'
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  return (
    <div className='relative'>
      <HeroSection />
      <WelcomeSection />
      <AmenitiesSection />
    </div>
  )
}

export default Home