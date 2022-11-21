/* Componente da tela para adicionar novo produto */
import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'

function NewCategory() {
  // Variavel que armazena nome da imagem carregada
  const [fileName, setFileName] = useState(null)

  // Validando as informações do formulario
  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome da categoria'),
    file: Yup.mixed()
      .test('required', 'Carregue um arquivo', value => {
        return value?.length > 0
      })
      .test('required', 'Carregue apenas arquivos JPEG ou PNG', value => {
        return value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  // Envando nova categoria para o back-end
  const onSubmit = async data => {
    const categoryDataFormData = new FormData()

    categoryDataFormData.append('name', data.name)
    categoryDataFormData.append('file', data.file[0])

    await toast.promise(api.post('/categories', categoryDataFormData), {
      pedding: 'Criando nova categoria...',
      success: 'Categoria criada com sucesso',
      error: 'Falha ao criar a categoria'
    })
  }

  return (
    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </div>

        <div>
          <LabelUpload>
            {/* Verificação para mudar o nome do input da imagem */}
            {fileName || (
              <>
                <CloudUploadIcon />
                Carregue a imagem da categoria
              </>
            )}

            <input
              type="file"
              accept="image/png, image/jpeg, image/svg"
              {...register('file')}
              onChange={value => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </LabelUpload>
          <ErrorMessage>{errors.file?.message}</ErrorMessage>
        </div>

        <ButtonStyles>Adicionar Categoria</ButtonStyles>
      </form>
    </Container>
  )
}

export default NewCategory
