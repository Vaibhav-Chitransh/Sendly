import ContactUs from '@/components/layout/ContactSection'
import {Features} from '@/components/layout/Features'
import HeroSection from '@/components/layout/HeroSection'
import Navbar from '@/components/layout/Navbar'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <ContactUs />
    </div>
  )
}

export default LandingPage
