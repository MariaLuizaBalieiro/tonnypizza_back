
var infos = require('./usuariosPerfil.js')

var categoria = infos.categorias
var produtos = infos.pizzasJSON


const mostrarPizzas = (idpizzas) => {
    const arraypizzas = produtos.pizzas
    const arrayComentarios = arraypizzas[0].comentarios

    let arrayC = []
    let arrayCo = []
    let status = false
   
    arraypizzas.forEach(function(pizzas){
        if(pizzas.id == idpizzas){
            let jsonpizzas = {}

            jsonpizzas.foto = pizzas.foto
            jsonpizzas.nome = pizzas.nome
            jsonpizzas.favorito = pizzas.favorito
            jsonpizzas.valor = pizzas.preco
            jsonpizzas.descricao = pizzas.descricao
            jsonpizzas.avl = pizzasJSON.avaliacao
           
            arrayComentarios.forEach(function(comen){
                const fotoUsuario = comen.usuario.foto_usuario
                const nomeUsuario = comen.usuario.nome
                let jsonC = {}
   
               jsonC.fotoU = fotoUsuario
               jsonC.nomeU = nomeUsuario
               jsonC.data = comen.data
               jsonC.avlComentario = comen.avl_comen
               jsonC.titulo = comen.titulo
               jsonC.comentario = comen.coment_inteiro
   
               arrayCo.push(jsonC)
            })
   
            jsonPizzas.comentario = arrayCo
           
            arrayC.push(jsonPizzas)
   
            status = true
        }
        })
   
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false  
}

const getFavoritos = () => {
    const arrayPizzas = produtos.pizzas
    let arrayC = []
    let status = false
    arrayPizzas.forEach(function(produto){
        if(produto.favorito == true){
            let jsonPizzas = {}
            jsonPizzas.foto = produto.foto
            jsonPizzas.nome = produto.nome
            jsonPizzas.valor = produto.preco
            arrayC.push(jsonPizza)
            status = true
        }
        })
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false  
}

const mostrarBebida = (idProduto) => {
    const arrayBebida = produtos.bebidas

    let arrayC = []
    let status = false
   
    arrayBebida.forEach(function(produto){
        if(produto.id == idProduto){
            let jsonPizzas = {}

            jsonPizzas.foto = produto.foto
            jsonPizzas.nome = produto.nome
            jsonPizzas.favorito = produto.favorito
            jsonPizzas.valor = produto.preco
            jsonPizzas.descricao = produto.descricao
            jsonPizzas.avl = produto.avaliacao
                       
            arrayC.push(jsonPizzas)
   
            status = true
        }
        })
   
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false  
}

const mostrarBebidas = (idProdutos) => {
    const arrayBebida = produtos.bebidas

    let arrayC = []
    let status = false
   
    arrayBebida.forEach(function(produto){
            let jsonPizzas = {}

            jsonPizzas.foto = produto.foto
            jsonPizzas.nome = produto.nome
            jsonPizzas.favorito = produto.favorito
            jsonPizzas.valor = produto.preco
            jsonPizzas.descricao = produto.descricao
            jsonPizzas.avl = produto.avaliacao
                       
            arrayC.push(jsonPizzas)
   
            status = true
        })
   
        let jsonT = {arrayC}
        if(status)
        return jsonT
        else
        return false  
}

//console.log(mostrarPizza(3))