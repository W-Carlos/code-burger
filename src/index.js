import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

/* import Login from './containers/Login' */
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

ReactDOM.render(
    <>
        <Register />
        <ToastContainer autoClose={2000} theme="colored" />
        <GlobalStyles />
    </>,
    document.getElementById('root')
)
