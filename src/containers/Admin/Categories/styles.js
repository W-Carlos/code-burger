import EditIcon from '@mui/icons-material/Edit'
import styled from 'styled-components'

export const Container = styled.div``

export const Img = styled.img`
  width: 70px;
  border-radius: 5px;
`

export const EditIconStyles = styled(EditIcon)`
  cursor: pointer;
  color: #323d5d;
`

export const NewCategory = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  margin-bottom: 20px;

  width: 11.426rem;
  height: 2.258rem;
  background: #9758a6;
  border: none;
  border-radius: 0.5rem;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.18rem;
  text-align: center;
  border: none;
  color: #eeeeee;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
