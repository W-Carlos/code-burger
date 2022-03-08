import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    ErrorMessage,
    SignInLink
} from './styles'

function Login() {
    const { putUserData } = useUser()

    /* Validação do formulario */
    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatorio'),
        password: Yup.string()
            .required('A senha é obrigatoria')
            .min(6, 'A senha deve ter pelo menos 6 digitos')
    })

    /* Configuração react-hook-form */
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    /* Acessando a api quando clicar no botão de submit */
    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                // Adicionando Toast Messages
                pending: 'Verificando seus dados',
                success: 'Seja bem-vindo(a)',
                error: 'Verifique seu e-mail e senha 🤯'
            }
        )

        putUserData(data)
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="login-image" />
            <ContainerItens>
                <img src={Logo} alt="logo-code-burger" />
                <h1>Login</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button
                        type="submit"
                        style={{
                            marginTop: '4.68rem',
                            marginBottom: '1.56rem'
                        }}
                    >
                        Sing In
                    </Button>
                </form>
                <SignInLink>
                    Não possui conta?{' '}
                    <Link style={{ color: 'white' }} to="/cadastro">
                        SingUp
                    </Link>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Login
