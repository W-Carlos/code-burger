import styled from 'styled-components'

export const Container = styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

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

export const CategoryImage = styled.img``

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const Image = styled.img`
    width: 200px;
    border-radius: 15px;
`

export const Button = styled.button`
    background: #9758a6;
    border-radius: 8px;
    border: none;
    height: 50px;
    margin-top: 18px;
    cursor: pointer;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`
