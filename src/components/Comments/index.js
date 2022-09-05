import React from 'react'
import Carousel from 'react-elastic-carousel'

import Aspas from '../../assets/aspas-duplas.png'
import ImgUserOne from '../../assets/userOne.svg'
import ImgUserThree from '../../assets/userThree.svg'
import ImgUserTwo from '../../assets/userTwo.svg'
import {
    Container,
    H2,
    ContainerItem,
    Paragraph,
    UserComment,
    ImageUser,
    Span,
    AspasImg
} from './styles'

export function Comments() {
    return (
        <Container>
            <H2>Depoimentos</H2>

            <h3>O que os clientes dizem sobre o CodeBurger</h3>

            <Carousel itemsToShow={2} style={{ width: '90%' }}>
                <ContainerItem>
                    <AspasImg src={Aspas} alt="simbolo de aspas" />
                    <Paragraph>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim.
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim.
                    </Paragraph>
                    <UserComment>
                        <ImageUser src={ImgUserOne} alt="Imagem do usuario" />
                        <Span>Vanessa da Silva</Span>
                    </UserComment>
                </ContainerItem>

                <ContainerItem>
                    <AspasImg src={Aspas} alt="simbolo de aspas" />
                    <Paragraph>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim.
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim.
                    </Paragraph>
                    <UserComment>
                        <ImageUser src={ImgUserTwo} alt="Imagem do usuario" />
                        <Span>Ricardo Nascimento</Span>
                    </UserComment>
                </ContainerItem>

                <ContainerItem>
                    <AspasImg src={Aspas} alt="simbolo de aspas" />
                    <Paragraph>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim.
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim.
                    </Paragraph>
                    <UserComment>
                        <ImageUser src={ImgUserThree} alt="Imagem do usuario" />
                        <Span>Beatriz dos Santos</Span>
                    </UserComment>
                </ContainerItem>

                <ContainerItem>
                    <AspasImg src={Aspas} alt="simbolo de aspas" />
                    <Paragraph>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim.
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim.
                    </Paragraph>
                    <UserComment>
                        <ImageUser src={ImgUserOne} alt="Imagem do usuario" />
                        <Span>Ana Silva</Span>
                    </UserComment>
                </ContainerItem>
            </Carousel>
        </Container>
    )
}
