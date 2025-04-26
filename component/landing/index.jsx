import React from 'react'
import NavBar from "./NavBar"
import MedTrust from "./medtrust"
import Organicfertilizer from "./organicfertilizer"
import GreenEnergy from "./GreenEnergy"
import OurPartners from "./OurPartners"
import DataPage from "./DataPage"
import Testimony from "./Testimony"
import Products from "./products"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <MedTrust />
      <DataPage/>
      <OurPartners/>
      <GreenEnergy/>
      <Organicfertilizer />
      <Testimony/>
      <Products />
      <Footer/>

    </div>
  )
}

export default LandingPage
