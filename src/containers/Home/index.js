import React from 'react'

import HomeLogo from '../../assets/logo-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, HomeImage } from './styles'

function Home() {
    return (
        <Container>
            <HomeImage src={HomeLogo} alt="Logo CodeBurger" />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}

export default Home
