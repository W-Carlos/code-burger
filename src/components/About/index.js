import React from 'react'

import RestaurantImage from '../../assets/restaurante.jpg'
import { Container, Image, DIV, H2, P } from './styles'

export function About() {
    return (
        <Container>
            <Image src={RestaurantImage} alt="Imagem de restaurante" />
            <DIV>
                <H2>Sobre o CodeBurger</H2>
                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis justo sem. Donec consequat, nunc a dapibus
                    dapibus, justo dolor tristique tortor, sit amet tincidunt
                    lorem nisl at ex. Cras dolor purus, varius in euismod
                    pretium, finibus nec mi. Curabitur aliquam pharetra lectus
                    in pharetra. Nullam viverra elementum neque quis fermentum.{' '}
                </P>

                <P>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis justo sem. Donec consequat, nunc a dapibus
                    dapibus, justo dolor tristique tortor, sit amet tincidunt
                    lorem nisl at ex. Cras dolor purus, varius in euismod
                    pretium, finibus nec mi. Curabitur aliquam pharetra lectus
                    in pharetra. Nullam viverra elementum neque quis fermentum.{' '}
                </P>
            </DIV>
        </Container>
    )
}
