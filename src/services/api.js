/* Arquivo de serviços para acessar o axios */
import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001'
})

// Interceptando um arequisição. Antes de enviar a requisição vai ser Adicionado Token JWT nas chamadas da API
apiCodeBurger.interceptors.request.use(async config => {
  // Pegando o token no localStorage
  const userData = await localStorage.getItem('codeburger: userData')
  const token = userData && JSON.parse(userData).token
  // Colocando o token dentro da config
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default apiCodeBurger
