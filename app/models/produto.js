var mongoose = require('mongoose');

module.exports = mongoose.model('Produto', {
    codigo: Number,
    descricao: String,
    preco_custo: Number,
    preco_venda: Number,
    qtde: Number
});