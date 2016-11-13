var Produto = require('./models/produto');

function getProdutos(res) {
    Produto.find(function (err, produtos) {

        if(err){
            res.send(err);
        }

        res.json(produtos);
    })   
};

module.exports = function (app) {

    app.get('/api/produtos', function (req, res) {
        getProdutos(res);
    })

    app.post('/api/produtos', function (req, res) {

        // create a todo, information comes from AJAX request from Angular
        Produto.create({
            codigo: req.body.codigo,
            descricao: req.body.descricao,
            preco_custo: req.body.preco_custo,
            preco_venda: req.body.preco_venda,
            qtde: req.body.qtde,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getProdutos(res);
        });

    });

    app.delete('/api/produtos/:produto_id', function (req, res) {
        Produto.remove({
            _id: req.params.produto_id
        }, function (err) {
            if (err)
                res.send(err);

            getProdutos(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
