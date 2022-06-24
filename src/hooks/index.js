/* Este arquivo tem todos os providers */

import PropTypes from 'prop-types'
import React from 'react'

import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => <UserProvider>{children}</UserProvider>

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppProvider
