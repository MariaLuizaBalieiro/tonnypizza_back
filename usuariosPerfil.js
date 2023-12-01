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
        nome: 'Alice Zeurgo',
        endereco: 'rua dos psiquiatras, jandira- sp ',
        telefone:'99289-8672',
        email:'aliceZeurgo@gmail.com',
        senha: 'aaliceamaoeduardo'
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
            avaliacaopessoal: '4'
            
         },
         
      ]

},

   ],
}