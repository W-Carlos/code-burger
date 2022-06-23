import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
    Container,
    ProductsImage,
    CategoryButton,
    CategoryMenu,
    ProductsContainer
} from './styles'

export function Products() {
    // Pegando as categorias no back-end
    const [categories, setCategories] = useState([])

    // Pegando os produtos no back-end
    const [products, setProducts] = useState([])

    // Estado que mostra os produtos filtrados
    const [filteredProducts, setFilteredProducts] = useState([])

    // Estado responsavel pela mudança de cor do botão do menu quando clicado
    const [activeCategory, setActiveCategory] = useState(0)

    // useEffect vai redenrizar as categorias quando a página de home for carregado
    useEffect(() => {
        // Carregando menu de categorias
        async function loadCategories() {
            const { data } = await api.get('categories')

            // Adicionando botão todas no meno de categorias.
            // Botão todas mostra dos os produtos
            const newCategory = [{ id: 0, name: 'Todas' }, ...data]

            /* console.log(data) */
            setCategories(newCategory)
        }

        // Carregando os produtos
        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            // Formatando o preço dos cards de produtos
            const newProducts = allProducts.map(product => {
                // Formatando a moeda
                return {
                    ...product,
                    formatedPrice: formatCurrency(product.price)
                }
            })

            /* console.log(data) */
            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()
    }, [])

    // Filtro de produtos por categoria
    // Filtrando os produtos pelo id da categoria
    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])

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
            <ProductsContainer>
                {filteredProducts &&
                    filteredProducts.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))}
            </ProductsContainer>
        </Container>
    )
}
