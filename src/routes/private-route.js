/* Lógica de rotas privadas */

import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({ component, ...rest }) {
    // Verificando se o usuário está logado
    const user = localStorage.getItem('codeburger: userData')

    // Se usuário não existir ele vai ser redirecionado para tela de login
    if (!user) {
        return <Redirect to="/login" />
    } else {
        // Se usuário existir ele é direcionado para tela de home
        return <Route {...rest} component={component} />
    }
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
