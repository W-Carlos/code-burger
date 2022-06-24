/* Este arquivo tem todos os providers */

import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
)

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppProvider
