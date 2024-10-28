import React from 'react'
import NavBar from '../Navbar/NavBar'
import HeroSection from '../Hero Section/HeroSection'
import MarqueeEffect from '../Marquee/Marquee'
import CardGrid from '../HomeCards/CardGrid'
import Footer from '../Footer/Footer'

function LandingPage() {
  return (
    <>
      <div>
        <HeroSection />
        <MarqueeEffect/>
        <div className='mt-16 mb-5'>
          <h1 className='text-5xl font-semibold text-center'>Why FinVidya ?</h1>
        <CardGrid/>
        </div>
      </div>
    </>
  )
}

export default LandingPage
