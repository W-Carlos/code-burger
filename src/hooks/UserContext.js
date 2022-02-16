/* Esse arquivo vai criar o context para armazenar as informações do usuario */

import PropTypes from 'prop-types'
import React, { createContext, useContext } from 'react'

const UserContext = createContext({})

// No provider é colocado todas as informações que serão disponibilizadas em toda a aplicação
export const UserProvider = ({ children }) => {
    const user = { name: 'Carlos', age: 25 }
    const OtherUser = { name: 'Paulo', age: 30 }
    const newUser = { name: 'Maria', age: 40 }

    return (
        <UserContext.Provider value={{ user, OtherUser, newUser }}>
            {children}
        </UserContext.Provider>
    )
}

// Essa função irá disponibilizar os dados para a aplicação
export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
        throw new Error('useUser must be used with UserContext')
    }

    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}
