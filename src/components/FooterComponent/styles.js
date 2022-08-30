import styled from 'styled-components'

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #e5e5e5;
    padding: 0 110px;

    hr {
        width: 100%;
        border: 1px solid #8f8888db;
    }
`

export const ImageLogo = styled.img`
    margin-top: 50px;
    width: 300px;
`

export const P = styled.p`
    margin: 50px 0;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
`

export const Socials = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 50px;

    .icon {
        font-size: 35px;
        transition: 0.5s;
    }

    .icon:hover {
        color: #9758a6;
        transition: ease-in-out 0.5s;
    }
`

export const Copy = styled.p`
    margin: 30px 0;
`
