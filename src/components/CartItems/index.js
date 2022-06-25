import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body } from './styles'

export function CartItems() {
    const { cartProducts } = useCart()
    console.log(cartProducts)

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preço</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts &&
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} />
                        <p>{product.name}</p>
                        <p>{formatCurrency(product.price)}</p>
                        <p>{product.quantity}</p>
                        <p>
                            {formatCurrency(product.quantity * product.price)}
                        </p>
                    </Body>
                ))}
        </Container>
    )
}
