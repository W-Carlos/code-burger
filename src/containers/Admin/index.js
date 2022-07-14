import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'

import api from '../../../src/services/api'
import Orders from './Orders'
import { Container } from './styles'

export function Admin() {
    const [orders, setOrders] = useState([])
    const [rows, setRows] = useState([])

    console.log(orders)

    useEffect(() => {
        // Carregando menu de categorias
        async function loadOrders() {
            const { data } = await api.get('orders')

            setOrders(data)
        }

        loadOrders()
    }, [])

    function createData(order) {
        return {
            name: order.user.name,
            orderId: order._id,
            date: order.createdAt,
            status: order.status,
            products: order.products
        }
    }

    console.log(rows)

    useEffect(() => {
        const newRows = orders.map(ord => createData(ord))
        setRows(newRows)
    }, [orders])

    return (
        <Container>
            <Orders />
        </Container>
    )
}
