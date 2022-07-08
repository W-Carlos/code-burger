import React from 'react'

import HomeLogo from '../../assets/logo-home.svg'
import { CategoryCarousel, Header, OffersCarousel } from '../../components'
import { Container, HomeImage } from './styles'

export function Home() {
    return (
        <Container>
            <Header />
            <HomeImage src={HomeLogo} alt="Logo CodeBurger" />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}
