/* Arquivo de serviços para acessar o axios */
import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'http://localhost:3001'
})

export default apiCodeBurger
