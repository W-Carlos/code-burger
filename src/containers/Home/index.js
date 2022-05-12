import React from 'react'

import HomeLogo from '../../assets/logo-home.svg'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeImage } from './styles'

function Home() {
    return (
        <Container>
            <HomeImage src={HomeLogo} alt="Logo CodeBurger" />
            <CategoryCarousel />
        </Container>
    )
}

export default Home
