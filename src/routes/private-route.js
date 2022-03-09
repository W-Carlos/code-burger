/* Lógica de rotas privadas */

import PropTypes from 'prop-types'
import React from 'react'
import { Route, Navigate } from 'react-router-dom'

function PrivateRoute({ element, ...rest }) {
    // Verificando se o usuário está logado
    const user = localStorage.getItem('codeburger:userData')

    // Se usuário não existir ele vai ser redirecionado para tela de login
    if (!user) {
        return <Navigate raplace to="/login" />
    }

    // Se usuário existir ele é direcionado para tela de home
    return <Route {...rest} element={element} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
