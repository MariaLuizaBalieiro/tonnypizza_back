var usuariosPerfil = {
    clientes:
    [
    {
       nome: 'Tamires Fernandes',
       endereco: 'Jardim angelica, carapicuiba- sp',
       telefone:'99252-1426',
       email:'tamires.fernandes@gmail.com',
       senha: 'euamomeunamorado123'
    }, 
    {
        nome: 'Luana Maga',
        endereco: 'Rua dos quinto dos infernos, jandira- SP',
        telefone:'6666-6565',
        email:'luana.maga@gmail.com',
        senha: 'EUodeioOAescola'
     }, 
     {
        nome: 'Kainão Braga',
        endereco: 'Rua onde judas perdeu as botas, jandira- SP',
        telefone:'993467-9090',
        email:'kainãobraga@gmail.com',
        senha: 'aaaaaaaaaaaaaaaaa1234'
     },
     {
        nome: 'Maria Luiza Balieiro',
        endereco: 'Rua dos doidos, barueri- sp ',
        telefone:'95088-1414',
        email:'malu.balieiro@gmail.com',
        senha: 'eunãoaguentomais28'
     },
     {
        nome: 'Glaucia Barletta',
        endereco: 'rua dos psiquiatras, jandira- sp ',
        telefone:'99289-8672',
        email:'glauciaBarletta@gmail.com',
        senha: 'glaucia1234567'
     }
    ]
}

var categorias = {
   categorias: [
      {id: 1,
      nome:'Pizzas',
      descricaco: 'Todas as pizzas', 
   imagem: ''},
   
   {id:2, 
   nome: 'Bebidas',
    descricaco: 'Todas as bebidas estão aqui',
   imagem:''},

   {id:3, 
      nome: 'Pizzas doces',
       descricaco: 'Todas as pizzas doces estão aqui',
      imagem:''},

      {id:4, 
         nome: 'Sobremesa',
          descricaco: 'Todas as sobremesas estão aqui',
         imagem:''},

         {id:5, 
            nome: 'alcoólicos',
             descricaco: 'Todas as bebidas com alcool estão aqui (apresentar documento na hora da entrega ou retirada)',
            imagem:''},
   ],
}

var pizzas = {
   pizzas:
   [ {id:'1',
      nome: 'Marguerita',
      preco: 'R$ 35,00',
      descricao: 'Molho de tomate, mussarela fresca, manjericão e azeite.',
      imagem: '',
      categoria: [
         categorias[1]
      ],
      favoritos: true,
      avaliacao: 5,
      comentarios:[
         {
            usuariosPerfil: 'Tamires Fernandes',
            data:'15/06/2023',
            avaliacaopessoal: '4',
            titulo: 'A pizza estava muito boa',
            comentario: 'Uma verdadeira explosão de sabores clássicos! A pizza Marguerita que provei aqui foi uma experiência autêntica italiana. A mussarela fresca derrete na boca, o molho de tomate é vibrante e o toque de manjericão perfuma cada mordida. Uma combinação simples, porém incrivelmente deliciosa. Definitivamente, uma opção que honra a tradição e a simplicidade da boa pizza italiana'
           
         },
         
      ]

},

{id:'2',
      nome: 'Vegetariana',
      preco: 'R$ 42,00',
      descricao: ' Pimentão, cebola, cogumelos, azeitonas, tomate e queijo.',
      imagem: '',
      categoria: [
         categorias[1]
      ],
      favoritos: false,
      avaliacao: 3,
      comentarios:[
         {
            usuariosPerfil: 'Luana Maga',
            data:'27/12/2023',
            avaliacaopessoal: '3',
            titulo: 'Boa mas não vale o preço',
            comentario: 'Embora a variedade de ingredientes na pizza vegetariana fosse generosa, senti que faltava um pouco de coesão nos sabores. A combinação de vegetais parecia um tanto desequilibrada, alguns ingredientes se sobressaíam mais do que outros, o que resultava em uma experiência um pouco fragmentada. Talvez uma revisão na distribuição dos ingredientes pudesse melhorar a experiência. No entanto, ainda assim, a base estava boa, mas talvez precisasse de um ajuste para oferecer uma experiência mais equilibrada.'
         },
         
      ]

},

{id:'3',
      nome: 'Pepperoni',
      preco: 'R$ 40,00',
      descricao: 'Molho de tomate, mussarela fresca, manjericão e azeite',
      imagem: '',
      categoria: [
         categorias[1]
      ],
      favoritos: true,
      avaliacao: 4,
      comentarios:[
         {
            usuariosPerfil: ' Kainão Braga',
            data:'15/06/2023',
            avaliacaopessoal: '4',
            titulo: 'A pizza estava uma delicia',
            comentario: 'Uma verdadeira explosão de sabores clássicos! A pizza Marguerita que provei aqui foi uma experiência autêntica italiana. A mussarela fresca derrete na boca, o molho de tomate é vibrante e o toque de manjericão perfuma cada mordida. Uma combinação simples, porém incrivelmente deliciosa. Definitivamente, uma opção que honra a tradição e a simplicidade da boa pizza italiana.'
           
         },
         
      ]

},
   
{id:'4',
      nome: 'Quatro Queijos',
      preco: 'R$ 40,00',
      descricao: 'Mussarela, parmesão, gorgonzola e provolone derretidos em harmonia.',
      imagem: '',
      nome:'Coca-Cola',
      categoria: [
         categorias[1]
      ],
      favoritos: false,
      avaliacao: 5,
      comentarios:[
         {
            usuariosPerfil: ' Kainão Braga',
            data:'15/06/2023',
            avaliacaopessoal: '2',
            titulo: 'A pizza foi o que eu esperava',
            comentario: 'Embora a promessa de quatro queijos fosse tentadora, a pizza não entregou a explosão de sabores que eu esperava. A combinação de queijos estava presente, mas de forma bastante sutil. O sabor não se destacava e parecia faltar aquela intensidade característica dos queijos escolhidos. Talvez uma maior quantidade ou variedade dos queijos, ou até mesmo um método de cocção diferente para realçar os sabores, poderiam tornar essa opção mais marcante. No geral, foi uma experiência um tanto quanto discreta para uma pizza de quatro queijos.'
           
         },
         
      ]

},

{id:'4',
      nome: 'Calabresa',
      preco: 'R$ 35,00',
      descricao: 'Fatias de linguiça calabresa, cebola, pimentão e queijo.',
      imagem: '',
      nome:'Suco de Laranja',
      categoria: [
         categorias[1]
      ],
      favoritos: true,
      avaliacao: 4,
      comentarios:[
         {
            usuariosPerfil:'Maria Luiza Balieiro',
            data:'4/01/2023',
            avaliacaopessoal: '5',
            titulo: 'melhor pizza de calabresa que eu já comi!',
            comentario: 'Esta pizza de calabresa é simplesmente fenomenal! A generosidade das fatias de linguiça calabresa grelhada adiciona um sabor defumado e levemente picante que é simplesmente irresistível. A combinação perfeita de cebolas e pimentões complementa maravilhosamente o sabor robusto da linguiça. O queijo derretido une todos os sabores de forma sublime. Sem dúvida, esta pizza de calabresa é uma explosão de sabores que agrada a todos os amantes de uma boa pizza, e posso dizer que é uma das melhores que já provei'
           
         },
         
      ]

},

{id:'5',
      nome: 'Frango com Catupiry',
      preco: 'R$ R$ 45,00',
      descricao: 'Frango desfiado, catupiry cremoso e milho',
      imagem: '',
      nome:'Vinho tinto',
      categoria: [
         categorias[1]
      ],
      favoritos: true,
      avaliacao: 4,
      comentarios:[
         {
            usuariosPerfil:'Glaucia Barletta',
            data:'15/06/2014',
            avaliacaopessoal: '4',
            titulo: 'uma pizza generosa!',
            comentario: 'Esta pizza de Frango com Catupiry é uma delícia! A combinação de frango desfiado suculento e o cremoso catupiry é realmente tentadora. O toque do milho adiciona um contraste doce que harmoniza perfeitamente com os outros sabores. A massa estava no ponto certo, crocante por fora e macia por dentro. No entanto, achei que a quantidade de frango poderia ser um pouco mais generosa para realçar ainda mais o sabor. No geral, uma pizza saborosa e com uma combinação de ingredientes que vale a pena experimentar!'
           
         },
         
      ]

},

   ]
}

var bebidas = {
   bebidas: [
      {id: 1, nome:'Coca-Cola 2l', preco:'14.99', imagem:'', descricaco:'refrigerante sabor cola'},
      {id: 2, nome:'suco de laranja 1.5 l', preco:'10.50', imagem:'', descricaco:'suco de laranja natural '}, 
      {id: 3, nome:'delvale de uva 1l', preco:'14.99', imagem:'', descricaco:'suco da marca delvale, sabor uva'},  
      {id: 4, nome:'Chá Gelado de Hibisco com Frutas Vermelhas 2l', preco:'14.99', imagem:'', descricaco:' Um chá gelado feito com infusão de hibisco e uma combinação de frutas vermelhas como morangos, amoras e framboesas, resultando em uma bebida refrescante e levemente ácida.'},  
      {id: 1, nome:'Limone Spritz 2l', preco:'14.99', imagem:'', descricaco:'Uma refrescante mistura de água com gás, limão siciliano espremido e um toque sutil de xarope de açúcar.'}
   ]
}


module.exports={
   categorias,
   produtosJSON,
   usuarioJSON
}