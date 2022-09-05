import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 35px 0;

    h3 {
        margin-bottom: 24px;
        font-weight: 600;
        font-size: 24px;
        line-height: 45px;

        color: #424242;
    }

    .rec.rec-arrow {
        background-color: #9758a6;
        color: #efefef;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;
    }

    .rec.rec-arrow:hover {
        border: 2px solid #9758a6;
        background-color: #efefef;
        color: #9758a6;
    }

    .rec.rec-arrow:disabled {
        border: none;
        background-color: #bebebf;
        color: #efefef;
    }
`

export const H2 = styled.h2`
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;

    color: #424242;
`

export const ContainerItem = styled.div`
    width: 500px;
    background-color: #e5e5e5;
    border-radius: 10px;
`

export const Paragraph = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin: 0 0 20px 32px;
    width: 440px;
    color: #9758a6;
`

export const UserComment = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-left: 32px;
    margin-bottom: 32px;
`

export const ImageUser = styled.img`
    width: 42px;
`

export const Span = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    color: #9758a6;
`

export const AspasImg = styled.img`
    width: 45px;
    margin: 32px 0 5px 32px;
`
