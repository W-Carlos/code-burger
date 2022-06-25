import React from 'react'

import CartLogo from '../../assets/cart-products.svg'
import { CartItems } from '../../components'
import { Container, CartImage } from './styles'

export function Cart() {
    return (
        <Container>
            <CartImage src={CartLogo} alt="Logo do carrinho" />
            <CartItems />
        </Container>
    )
}
