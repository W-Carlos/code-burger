import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
    Container,
    RegisterImage,
    ContainerItens,
    Label,
    Input,
    ErrorMessage,
    SignInLink
} from './styles'

function Register() {
    /* Validação do formulario de registro de usuario */
    const schema = Yup.object().shape({
        name: Yup.string().required('O seu nome é obrigatório'),
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatorio'),
        password: Yup.string()
            .required('A senha é obrigatoria')
            .min(6, 'A senha deve ter pelo menos 6 digitos'),
        ConfirmPassword: Yup.string()
            .required('A confirmação da senha é obrigatoria')
            .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
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
        try {
            const { status } = await api.post(
                'users',
                {
                    // Adicionando toast message
                    name: clientData.name,
                    email: clientData.email,
                    password: clientData.password
                },
                // Fazendo o axios retornar o reponse code.
                { validateStatus: () => true }
            )

            // Verificando status para adicionar a menssagem toast
            if (status === 201 || status === 200) {
                toast.success('Cadastro realizado com sucesso!')
            } else if (status === 409) {
                toast.error('E-mail já cadastrado! Faça login para continuar')
            } else {
                throw new Error() // Irá jogar direto no catch
            }
        } catch (err) {
            // Erros genericos irá mostrar menssagem de falha no sistema
            toast.error('Falha no sistema! Tente novamente')
        }
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="register-image" />
            <ContainerItens>
                <img src={Logo} alt="logo-code-burger" />
                <h1>Cadastre-se</h1>

                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label error={errors.name?.message}>Nome</Label>
                    <Input
                        type="text"
                        {...register('name')}
                        error={errors.name?.message}
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.ConfirmPassword?.message}>
                        Confirmar Senha
                    </Label>
                    <Input
                        type="password"
                        {...register('ConfirmPassword')}
                        error={errors.ConfirmPassword?.message}
                    />
                    <ErrorMessage>
                        {errors.ConfirmPassword?.message}
                    </ErrorMessage>

                    <Button
                        type="submit"
                        style={{
                            marginTop: '1.56rem',
                            marginBottom: '1.56rem'
                        }}
                    >
                        Sing Up
                    </Button>
                </form>
                <SignInLink>
                    Já possui conta ? <a>Sing In</a>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}

export default Register
