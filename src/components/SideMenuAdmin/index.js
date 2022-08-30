import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink, H1, MenuBottom } from './styles'

export function SideMenuAdmin({ path }) {
    const { logout } = useUser()
    return (
        <Container>
            <H1>Administrador</H1>
            <hr></hr>
            {listLinks.map(item => (
                <ItemContainer key={item.id} isActive={path === item.link}>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItemContainer>
            ))}
            <hr></hr>
            <ItemContainer style={{ position: 'fixed', bottom: '30px' }}>
                <MenuBottom>
                    <div className="menuBottomStyle">
                        <HomeIcon style={{ color: '#ffffff' }} />
                        <ListLink to="/">Home</ListLink>
                    </div>
                    <div className="menuBottomStyle">
                        <LogoutIcon style={{ color: '#ffffff' }} />
                        <ListLink to="/login" onClick={logout}>
                            Sair
                        </ListLink>
                    </div>
                </MenuBottom>
            </ItemContainer>
        </Container>
    )
}

SideMenuAdmin.propTypes = {
    path: PropTypes.string
}
