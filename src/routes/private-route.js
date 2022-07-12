/* Lógica de rotas privadas */

import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ component, isAdmin, ...rest }) {
    // Verificando se o usuário está logado
    const user = localStorage.getItem('codeburger: userData')

    // Trava de segurança para o usuário não acessar areas restritas .Se o usuário não é administrador, ele é redirecionado para tela de home.
    if (isAdmin && !JSON.parse(user).admin) {
        return <Redirect to="/" />
    }

    // Se usuário não existir ele vai ser redirecionado para tela de login
    if (!user) {
        return <Redirect to="/login" />
    } else {
        // Se usuário existir ele é direcionado para tela de home
        return (
            <>
                {!isAdmin && <Header />}
                <Route {...rest} component={component} />
            </>
        )
    }
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}
