/* Esse arquivo vai criar o context para armazenar as informações do usuario */

import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

// No provider é colocado todas as informações que serão disponibilizadas em toda a aplicação
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    // Sempre que essa função for chamada ela irá gravar os dados do usuario.
    const putUserData = userInfo => {
        setUserData(userInfo)
    }

    return (
        <UserContext.Provider value={{ putUserData, userData }}>
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
