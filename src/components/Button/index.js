/* Componentizando o botão */
import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

export function Button({ children, ...rest }) {
    console.log(children)
    return <ContainerButton {...rest}>{children}</ContainerButton>
}

// Validação do propTypes. Definindo o tipo de dados do children.
Button.propTypes = {
    children: PropTypes.string
}
