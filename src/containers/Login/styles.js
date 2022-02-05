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
    height: 70%;
`

export const ContainerItens = styled.div`
    height: 70%;
    padding: 25px 75px;
    background: #373737;
    border-radius: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #ffffff;
        text-align: center;
        margin-top: 100px;
    }
`

export const Label = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    margin-top: 28px;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 391.42px;
    height: 38.32px;
    background: #ffffff;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    border: none;
    padding-left: 10px;
`

export const Button = styled.button`
    width: 182.81px;
    height: 36.13px;
    background: #9758a6;
    border-radius: 20px;

    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    border: none;
    color: #eeeeee;
    cursor: pointer;
    margin-top: 75px;
    margin-bottom: 25px;

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
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;

    a {
        cursor: pointer;
        text-decoration: underline;
    }
`
