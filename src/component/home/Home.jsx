import React from 'react'

import Whyus from '../whyus/WhyUs'
import Sliderr from '../customerReview/Sliderr'
import Services from '../services/Services'
import Herosection from '../homeSection/HeroSection'
import Packages from '../packages/Packages'

export const  Home = () => {
    return (
        <>
            <Herosection/>
            <Services/>
            <Whyus/>
            <Packages/>
            <Sliderr/>
        </>
    )
}

export default Home
