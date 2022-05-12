import React, { useEffect } from 'react'

import Category from '../../assets/categories.png'
import api from '../../services/api'
import { Container, CategoryImage } from './styles'

function CategoryCarousel() {
    // useEffect vai redenrizar as categorias quando a página de home for carregado
    useEffect(() => {
        async function loadCategories() {
            const response = await api.get('categories')

            console.log(response)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <CategoryImage src={Category} alt="seção categoria" />
        </Container>
    )
}

export default CategoryCarousel
