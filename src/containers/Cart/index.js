import React from 'react'

import CartLogo from '../../assets/cart-products.svg'
import { CartItems, CartResume, OffersCarousel } from '../../components'
import { Container, CartImage, Wrapper } from './styles'

export function Cart() {
    return (
        <Container>
            <CartImage src={CartLogo} alt="Logo do carrinho" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
            <OffersCarousel />
        </Container>
    )
}
