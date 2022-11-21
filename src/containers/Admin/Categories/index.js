import AddIcon from '@mui/icons-material/Add'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import { Container, Img, EditIconStyles, NewCategory } from './styles'

function Categories() {
  const [categories, setCategories] = useState([])
  const { push } = useHistory()

  // Carregando todos as categorias
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
      console.log(data)
    }

    loadCategories()
  }, [])

  // Função para direcionar para tela de adicionar nova categoria
  function AddNewCategory() {
    push(paths.NewCategory)
  }

  // Função para editar produto
  function EditCategory(categorie) {
    push(paths.EditCategory, { categorie })
  }

  return (
    <Container>
      <NewCategory onClick={() => AddNewCategory()}>
        <AddIcon />
        Nova Categoria
      </NewCategory>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Imagem da Categoria</TableCell>
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories &&
              categories.map(categorie => (
                <TableRow
                  key={categorie.id}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0
                    }
                  }}
                >
                  <TableCell component="th" scope="row">
                    {categorie.name}
                  </TableCell>
                  <TableCell align="center">
                    <Img src={categorie.url} alt="imagem-produto" />
                  </TableCell>
                  <TableCell>
                    <EditIconStyles onClick={() => EditCategory(categorie)} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default Categories
