import ContactUs from '@/components/layout/ContactSection'
import {Features} from '@/components/layout/Features'
import HeroSection from '@/components/layout/HeroSection'
import Navbar from '@/components/layout/Navbar'
import React, { useRef } from 'react'

const LandingPage = () => {
  const targetContact = useRef(null);

  const scrollToContact = () => {
    targetContact.current.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div>
      <Navbar scrollToContact={scrollToContact} />
      <HeroSection />
      <Features />
      <ContactUs ref={targetContact} />
    </div>
  )
}

export default LandingPage
