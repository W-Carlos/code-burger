// Esta função vai ser responsavel por fazer a formatação valores monetários

const formatCurrency = value => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
}

export default formatCurrency
