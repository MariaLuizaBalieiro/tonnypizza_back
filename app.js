const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()


app.use((request, response, next) =>{
  
    response.header('Access-Control-Allow-Origin', '*')
    
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    
    next()
})


//infos de uma pizza 
app.get('/produtos/pizza', cors(), async function(request, response, next){
    let idProduto = request.query.idProduto
    let controlePizzaria = require('./module/funcoes.js')
    let produtoPizza = controlePizza.mostrarPizza(idProduto)

    if(produtoPizza){
        response.json(produtoPizza)
        response.status(200)
    }else{
        response.status(404)
    }
})


// ifo bebidas
app.get('/produtos/bebida', cors(), async function(request, response, next){
    let idProduto = request.query.idProduto
    let controlePizza = require('./modulo/function.js')
    let produtoBebida = controlePizza.mostrarBebida(idProduto)

    if(produtoBebida){
        response.json(produtoBebida)
        response.status(200)
    }else{
        response.status(404)
    }
})

//info todas as bebidas
app.get('/produtos/bebidas', cors(), async function(request, response, next){
    let controlePizza = require('./modulo/function.js')
    let produtosBebidas = controlePizza.mostrarBebidas()

    if(produtosBebidas){
        response.json(produtosBebidas)
        response.status(200)
    }else{
        response.status(404)
    }
})




//infos sobremesas
app.get('/produtos/sobremesas', cors(), async function(request, response, next){
    let idProduto = request.query.idProduto
    let controlePizza = require('./modulo/function.js')
    let produtoSobremesas = controlePizza.mostrarDoce(idProduto)

    if(produtoPizza){
        response.json(produtoSobremesas)
        response.status(200)
    }else{
        response.status(404)
    }
})




// info mostrar sobremesas
app.get('/produtos/sobremesas', cors(), async function(request, response, next){
    let controlePizzaria = require('./modulo/function.js')
    let produtosSobremesas = controlePizzaria.mostrarDoces()

    if(produtosSobremesas){
        response.json(produtosSobremesas)
        response.status(200)
    }else{
        response.status(404)
    }
})




app.get('/usuarios', cors(), async function(request, response, next){
    let idUsuario = request.query.id
    let controlePizzaria = require('./modulo/function.js')
    let usuario = controlePizzaria.getUsuario(idUsuario)

    if(usuario){
        response.json(usuario)
        response.status(200)
    }else{
        response.status(404)
    }
})



app.get('/categoria/produtos', cors(), async function(request, response, next){
    let idCategorias = request.query.id
    let controlePizzaria = require('./modulo/function.js')
    let categoriaProdutos = controlePizzaria.getCategorias(idCategorias)

    console.log(categoriaProdutos)

    if(categoriaProdutos){
        response.json(categoriaProdutos)
        response.status(200)
    }else{
        response.status(404)
    }
})




app.listen('8080', function(){
    console.log('FUNCIONAAAA')
})