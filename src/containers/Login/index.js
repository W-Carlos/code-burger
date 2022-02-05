import React from 'react'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    Button,
    SignInLink
} from './styles'

function Login() {
    return (
        <Container>
            <LoginImage src={LoginImg} alt="login-image" />
            <ContainerItens>
                <img src={Logo} alt="logo-code-burger" />
                <h1>Login</h1>

                <Label>Email</Label>
                <Input />

                <Label>Senha</Label>
                <Input />

                <Button>Sing In</Button>
                <SignInLink>
                    Não possui conta ? <a>SingUp</a>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login
