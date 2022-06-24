import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

// No provider é colocado todas as informações que serão disponibilizadas em toda a aplicação
export const CartProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]) // Armazena todoso os produtos do carrinho

    // Função que adiciona produtos ao carrinho
    const putProductInCart = async product => {
        // console.log(product)
        // Verificando se o produto já existe dentro do cartProducts. Seexistir ela atualiza o campo quantity
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []
        if (cartIndex >= 0) {
            // Vairavel que clona cartProducts
            newCartProducts = cartProducts

            // Procurando a posição do array que tem o produto repetido e aumentando a quantidade dos produtos
            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product]
            setCartProducts(newCartProducts)
        }

        // Gravando os itens do carrinho no localStorage
        await localStorage.setItem(
            'codeburger: cartInfo',
            JSON.stringify(newCartProducts)
        )
    }

    // Fazendo o load dos itens no localStorage quando a aplicação inicia
    useEffect(() => {
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem(
                'codeburger: cartInfo'
            )

            // Verificando se existe algum dado dentro do localStorage
            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData))
            }
        }

        loadUserData()
    }, [])

    return (
        <CartContext.Provider value={{ putProductInCart, cartProducts }}>
            {children}
        </CartContext.Provider>
    )
}

// Essa função irá disponibilizar os dados para a aplicação
export const useCart = () => {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used with UserContext')
    }

    return context
}

CartProvider.propTypes = {
    children: PropTypes.node
}
