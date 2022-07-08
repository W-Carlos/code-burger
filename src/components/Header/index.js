import React from 'react'

import Cart from '../../assets/cart.svg'
import User from '../../assets/user.svg'
import {
    Container,
    ContainerLeft,
    PageLink,
    ContainerRight,
    Line,
    PageLinkExit,
    ContainerText
} from './styles'

export function Header() {
    return (
        <Container>
            <ContainerLeft>
                <PageLink>Home</PageLink>

                <PageLink>Ver Produto</PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink>
                    <img src={Cart} alt="icone-carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={User} alt="icone-usuario" />
                </PageLink>

                <ContainerText>
                    <p>Olá, Wend Carlos</p>
                    <PageLinkExit>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}
