/* Componente da tela para adicionar novo produto */
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Container } from './styles'

function NewProduct() {
    // Carregando todos os produtos
    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')
        }

        loadOrders()
    }, [])

    return (
        <Container>
            <div>Olá</div>
        </Container>
    )
}

export default NewProduct
