import PropTypes from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import paths from '../../constants/paths'
import Categories from './Categories'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewCategory from './NewCategory'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Order && <Orders />}
        {path === paths.ProductsList && <ListProducts />}
        {path === paths.NewProduct && <NewProduct />}
        {path === paths.EditProduct && <EditProduct />}
        {path === paths.Categories && <Categories />}
        {path === paths.NewCategory && <NewCategory />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
