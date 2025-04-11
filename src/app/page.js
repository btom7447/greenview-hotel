import HeroSection from '@/components/HeroSection'
import SpecialOffers from '@/components/SpecialOffers'
import WelcomeSection from '@/components/WelcomeSection'
import Footer from '@/components/Footer';
import React from 'react'

const Home = () => {
  return (
    <div className='relative h-[250dvh]'>
      <HeroSection />
      <WelcomeSection />
      <Footer  />
      {/* <SpecialOffers /> */}
    </div>
  )
}

export default Home