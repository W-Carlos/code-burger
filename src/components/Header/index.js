import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import User from '../../assets/user.svg'
import { useUser } from '../../hooks/UserContext'
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
    const { logout } = useUser()

    // Navegações do botões
    const {
        push,
        location: { pathname }
    } = useHistory()

    // Quando essa função for chamada, ela vai deslogar o usuario e redireciona-lo para tela de login
    const logoutUser = () => {
        logout()
        push('/login')
    }

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
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>
        </Container>
    )
}
