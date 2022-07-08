/* Esse arquivo vai criar o context para armazenar as informações do usuario */

import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

// No provider é colocado todas as informações que serão disponibilizadas em toda a aplicação
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

    // Sempre que essa função for chamada ela irá gravar os dados do usuario.
    const putUserData = async userInfo => {
        setUserData(userInfo)

        // Gravando dados no localStorage
        await localStorage.setItem(
            'codeburger: userData',
            JSON.stringify(userInfo)
        )
    }

    // Função para deslogar o usuario
    const logout = async () => {
        await localStorage.removeItem('codeburger: userData')
    }

    // Recuperando informações no localStorage
    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem(
                'codeburger: userData'
            )

            // Verificando se existe algum dado dentro do localStorage
            if (clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
        }

        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{ putUserData, userData, logout }}>
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
