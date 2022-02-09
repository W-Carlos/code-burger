/* Componentizando o botão */
import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

function Button({ children, ...rest }) {
    console.log(children)
    return <ContainerButton {...rest}>{children}</ContainerButton>
}

export default Button

// Validação do propTypes. Definindo o tipo de dados do children.
Button.propTypes = {
    children: PropTypes.string
}
