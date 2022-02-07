import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    background: url('${Background}');
`

export const LoginImage = styled.img`
    height: 95%;
`

export const ContainerItens = styled.div`
    height: 95%;
    padding: 1.56rem 4.68rem;
    background: #373737;
    border-radius: 0 0.62rem 0.62rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 1.75rem;
        color: #ffffff;
        text-align: center;
        margin-top: 3.62rem;
    }

    img {
        margin: auto;
        width: 18.75rem;
    }
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 0.87rem;
    color: #ffffff;
    margin-top: 1.75rem;
    margin-bottom: 0.31rem;
`

export const Input = styled.input`
    width: 24.464rem;
    height: 2.395rem;
    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 0.31rem;
    border: none;
    padding-left: 0.62rem;
`

export const Button = styled.button`
    width: 11.426rem;
    height: 2.258rem;
    background: #9758a6;
    border-radius: 1.25rem;

    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.18rem;
    text-align: center;
    border: none;
    color: #eeeeee;
    cursor: pointer;
    margin-top: 4.68rem;
    margin-bottom: 1.56rem;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`

export const SignInLink = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 0.87rem;
    line-height: 1rem;
    color: #ffffff;

    a {
        cursor: pointer;
        text-decoration: underline;
    }
`
