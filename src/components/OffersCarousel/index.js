import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/offers.png'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
    Container,
    CategoryImage,
    ContainerItems,
    Image,
    Button
} from './styles'

export function OffersCarousel() {
    const [offers, setOffers] = useState([])

    // useEffect vai redenrizar as categorias quando a página de home for carregado
    useEffect(() => {
        async function loadOffers() {
            // Vai ser utilizado o endpoint de products, que vai ser retornado todos os produtos que o offer está como true.
            const { data } = await api.get('products')

            // Filtrando apenas os produtos que estão em oferta
            const onlyOffer = data
                .filter(product => product.offer)
                .map(product => {
                    // Formatando a moeda
                    return {
                        ...product,
                        formatedPrice: formatCurrency(product.price)
                    }
                })

            console.log(onlyOffer)
            setOffers(onlyOffer)
        }

        loadOffers()
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
            <CategoryImage src={Offers} alt="seção de ofertas" />
            <Carousel
                itemsToShow={5}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >
                {offers &&
                    offers.map(product => (
                        <ContainerItems key={product.id}>
                            <Image
                                src={product.url}
                                alt="foto do produto em oferta"
                            />
                            <p className="productName">{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button>Peça agora</Button>
                        </ContainerItems>
                    ))}
            </Carousel>
        </Container>
    )
}
