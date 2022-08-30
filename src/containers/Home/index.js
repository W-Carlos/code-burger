import React from 'react'

import HomeLogo from '../../assets/logo-home.svg'
import {
    CategoryCarousel,
    OffersCarousel,
    FooterComponent
} from '../../components'
import { Container, HomeImage } from './styles'

export function Home() {
    return (
        <Container>
            <HomeImage src={HomeLogo} alt="Logo CodeBurger" />
            <CategoryCarousel />
            <OffersCarousel />
            <FooterComponent />
        </Container>
    )
}
