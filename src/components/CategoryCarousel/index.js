import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categories.png'
import api from '../../services/api'
import {
    Container,
    CategoryImage,
    ContainerItems,
    Image,
    Button
} from './styles'

export function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    // useEffect vai redenrizar as categorias quando a página de home for carregado
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            /* console.log(data) */
            setCategories(data)
        }

        loadCategories()
    }, [])

    // Pontos de quebra da biblioteca Carousel
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoryImage src={Category} alt="seção categoria" />
            <Carousel
                itemsToShow={5}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >
                {categories &&
                    categories.map(category => (
                        <ContainerItems key={category.id}>
                            <Image src={category.url} alt="foto da categoria" />
                            <Button
                                to={{
                                    pathname: '/produtos',
                                    state: { categoryId: category.id }
                                }}
                            >
                                {category.name}
                            </Button>
                        </ContainerItems>
                    ))}
            </Carousel>
        </Container>
    )
}
