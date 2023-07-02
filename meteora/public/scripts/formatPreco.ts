const formatPreco = (preco:Number) => {
    return preco.toLocaleString('pt-BR', { style: 'currency', currency:'BRL'})
};

export default formatPreco;