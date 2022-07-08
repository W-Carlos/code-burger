import React from 'react'
import { useHistory } from 'react-router-dom'

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
    // Navegações do botões
    const {
        push,
        location: { pathname }
    } = useHistory()

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>

                <PageLink
                    onClick={() => push('/produtos')}
                    isActive={pathname.includes('/produtos')}
                >
                    Ver Produto
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
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
