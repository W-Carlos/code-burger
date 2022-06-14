import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import api from '../../services/api'
import {
    Container,
    ProductsImage,
    CategoryButton,
    CategoryMenu
} from './styles'

function Products() {
    // Pegando as categorias no back-end
    const [categories, setCategories] = useState([])
    // Estado responsavel pela mudança de cor do botão do menu quando clicado
    const [activeCategory, setActiveCategory] = useState(0)

    // useEffect vai redenrizar as categorias quando a página de home for carregado
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            // Adicionando botão todas no meno de categorias.
            // Botão todas mostra dos os produtos
            const newCategory = [{ id: 0, name: 'Todas' }, ...data]

            /* console.log(data) */
            setCategories(newCategory)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <ProductsImage src={ProductsLogo} alt="Imagem de um hamburguer" />

            <CategoryMenu>
                {categories &&
                    categories.map(category => (
                        <CategoryButton
                            type="button"
                            key={category.id}
                            isActiveCategory={activeCategory === category.id}
                            onClick={() => {
                                setActiveCategory(category.id)
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
            </CategoryMenu>
        </Container>
    )
}

export default Products
