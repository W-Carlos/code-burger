import React from 'react'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import Orders from './Orders'
import { Container } from './styles'

export function Admin() {
    return (
        <Container>
            <SideMenuAdmin />
            <Orders />
        </Container>
    )
}
