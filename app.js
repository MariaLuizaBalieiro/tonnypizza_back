const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//criando um objeto para manipular as requisições da API
const app = express()

//Função para manipular as retrições da API
app.use((request, response, next) =>{
  
    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    //Continuar processando outras coisas de dentro da API.
    next()
})


app.get('/produtos/pizza', cors(), async function(request, response, next){
    let idProduto = request.query.idProduto
    let controlePizzaria = require('./module/funcoes.js')
    let produtoPizza = controlePizzaria.mostrarPizza(idProduto)

    if(produtoPizza){
        response.json(produtoPizza)
        response.status(200)
    }else{
        response.status(404)
    }
})

//produt fav 
app.get('/produtos/favoritos', cors(), async function(request, response, next){
    let controlePizzaria = require('./module/funcoes.js')
    let produtosFavoritos = controlePizzaria.getFavoritos()

    if(produtosFavoritos){
        response.json(produtosFavoritos)
        response.status(200)
    }else{
        response.status(404)
    }
})

// produtos de uma determinada categoria
app.get('/categoria/produtos', cors(), async function(request, response, next){
    let idProduto = request.query.idProduto
    let controlePizzaria = require('./module/funcoes.js')
    let produtoPizza = controlePizzaria.getCategorias(idProduto)

    if(produtoPizza){
        response.json(produtoPizza)
        response.status(200)
    }else{
        response.status(404)
    }
})


app.listen('8080', function(){
    console.log('roda')
})

