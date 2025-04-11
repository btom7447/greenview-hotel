import HeroSection from '@/components/HeroSection'
import WelcomeSection from '@/components/WelcomeSection'
import React from 'react'

const Home = () => {
  return (
    <div className='relative'>
      <HeroSection />
      <WelcomeSection />
      {/* <SpecialOffers /> */}
    </div>
  )
}

export default Home