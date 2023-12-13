var usuarios = {
   clientes:
   [
   {
     id: 1,
     nome: 'Tamires Fernandes',
      endereco: 'Jardim angelica, carapicuiba- sp',
      telefone:'99252-1426',
      email:'tamires.fernandes@gmail.com',
      senha: 'tamiresferdandes123',
      img:'./tamires.jpg'
   }, 
   {
       id: 2,
     nome: 'Luana Maga',
       endereco: 'Rua dos quinto dos infernos, jandira- SP',
       telefone:'6666-6565',
       email:'luana.maga@gmail.com',
       senha: 'luanamaga123',
       img:'./luana.jpg'
    }, 
    {
      id: 3,
     nome: 'Kainão Braga',
       endereco: 'Rua onde judas perdeu as botas, jandira- SP',
       telefone:'993467-9090',
       email:'kainãobraga@gmail.com',
       senha: 'kainaobraga123',
       img:'./kanão.jpg'
    },
    {
       id: 4,
     nome: 'Maria Luiza Balieiro',
       endereco: 'Rua dos doidos, barueri- sp ',
       telefone:'95088-1414',
       email:'malu.balieiro@gmail.com',
       senha: 'marialuiza123',
       img:'./malu.jpg'
    },
    {
       id:5,
     nome: 'Glaucia Barletta',
       endereco: 'rua dos psiquiatras, jandira- sp ',
       telefone:'99289-8672',
       email:'glauciaBarletta@gmail.com',
       senha: 'glaucia123',
       img:'./alice.jpg'
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

var produtosJSON = {
  pizzas: [
      {
          id: 1,
          nome: 'Marguerita',
          preco: 'R$ 35,00',
          foto: '',
          descricao: ' Molho de tomate, mussarela fresca, manjericão e azeite.',
          categoria: [
              {idCat: 1, cat: categorias[0]}
        
          ],
          favorito: true,
          avaliacao: 5,
          comentarios: [
              {
                  usuario: {
                      foto_usuario: './tamires.jpg',
                      nome: '',
                  },
                  data: '15/06/2023',
                  avl_comen: 4,
                  titulo: 'A pizza estava muito boa',
                  comentarioUsuario: 'Uma verdadeira explosão de sabores clássicos! A pizza Marguerita que provei aqui foi uma experiência autêntica italiana. A mussarela fresca derrete na boca, o molho de tomate é vibrante e o toque de manjericão perfuma cada mordida. Uma combinação simples, porém incrivelmente deliciosa. Definitivamente, uma opção que honra a tradição e a simplicidade da boa pizza italiana'
              }
              
          ]
      },
      {
          id: 2,
          nome: 'Vegetariana',
          preco: 'R$ 42,00',
          foto: '',
          descricao: 'Pimentão, cebola, cogumelos, azeitonas, tomate e queijo.',
          categoria: [
              {idCat: 1, cat: categorias[0]}
          ],
          favorito: true,
          avaliacao: 3,
          comentarios: [
              {
                  usuario: {
                      foto_usuario: './luana.jpg',
                      nome: 'Luana Maga',
                  },
                  data: '27/12/2023',
                  avl_comen: 3,
                  titulo: 'Boa mas não vale o preço',
                  comentarioUsuario: 'Embora a variedade de ingredientes na pizza vegetariana fosse generosa, senti que faltava um pouco de coesão nos sabores. A combinação de vegetais parecia um tanto desequilibrada, alguns ingredientes se sobressaíam mais do que outros, o que resultava em uma experiência um pouco fragmentada. Talvez uma revisão na distribuição dos ingredientes pudesse melhorar a experiência. No entanto, ainda assim, a base estava boa, mas talvez precisasse de um ajuste para oferecer uma experiência mais equilibrada.'
              }
          ]
      },
      {
          id: 3,
          nome: 'Pepperoni',
          preco: 'R$ 40,00',
          foto: '',
          descricao: ' Molho de tomate, mussarela fresca, manjericão e azeite.',
          categoria: [
              {idCat: 1, cat: categorias[0]}
          ],
          favorito: true,
          avaliacao: 4,
          comentarios: [
              {
                  usuario: {
                      foto_usuario: './kainão.jpg',
                      nome: 'Kainão Braga',
                  },
                  data: '13/03/2023',
                  avl_comen: 5,
                  titulo: 'A pizza estava uma delicia',
                  comentarioUsuario: 'Uma verdadeira explosão de sabores clássicos! A pizza Marguerita que provei aqui foi uma experiência autêntica italiana. A mussarela fresca derrete na boca, o molho de tomate é vibrante e o toque de manjericão perfuma cada mordida. Uma combinação simples, porém incrivelmente deliciosa. Definitivamente, uma opção que honra a tradição e a simplicidade da boa pizza italiana.'
              }
          ]
      },
      {
          id: 4,
          nome: 'Quatro Queijos',
          preco: 'R$ 40,00',
          foto: '',
          descricao: 'Mussarela, parmesão, gorgonzola e provolone derretidos em harmonia',
          categoria: [
              {idCat: 1, cat: categorias[0]},
              
          ],
          favorito: false,
          avaliacao: 4,
          comentarios: [
              {
                  usuario: {
                      foto_usuario: './mulu.jpg',
                      nome: 'Maria Luiza',
                  },
                  data: '13/09/2023',
                  avl_comen:  2,
                  titulo: 'A pizza foi o que eu esperava',
                  coment_inteiro: 'A pizza foi o que eu esperava'
              }
          ]
      },
      {
          id: 5,
          nome: 'Calabresa',
          preco: 'R$ 35,00',
          foto: '',
          descricao: 'Fatias de linguiça calabresa, cebola, pimentão e queijo.',
          categoria: [
              {idCat: 1, cat: categorias[0]},
             
          ],
          favorito: true,
          avaliacao: 4,
          comentarios: [
              {
                  usuario: {
                      foto_usuario: './alice.jpg',
                      nome: 'Glaucia Barletta',
                  },
                  data: '4/01/2023',
                  avl_comen: 5,
                  titulo: 'melhor pizza de calabresa que eu já comi!',
                  coment_inteiro: 'Esta pizza de calabresa é simplesmente fenomenal! A generosidade das fatias de linguiça calabresa grelhada adiciona um sabor defumado e levemente picante que é simplesmente irresistível. A combinação perfeita de cebolas e pimentões complementa maravilhosamente o sabor robusto da linguiça. O queijo derretido une todos os sabores de forma sublime. Sem dúvida, esta pizza de calabresa é uma explosão de sabores que agrada a todos os amantes de uma boa pizza, e posso dizer que é uma das melhores que já provei'
              }
          ]
      },
  ],
  bebidas:[
      {
          id: 1,
          nome: 'coca-cola 2L',
          preco: 'R$ 10,00',
          foto: '',
          descricao: 'Refrescante e efervescente, nosso refrigerante de cola é a epítome do sabor clássico. Com sua mistura única de notas cítricas e um toque de especiarias, este refrigerante borbulhante oferece uma explosão instantânea de energia. Cada gole é uma celebração do equilíbrio perfeito entre doce e refrescante, deixando uma sensação de satisfação e prazer a cada garrafa gelada.',
          categoria: [
              categorias[2]
          ],
          favorito: false,
          avaliacao: 4
      },
      {
          id: 2,
          nome: 'Suco de laranja',
          preco: 'R$ 08,00',
          foto: '',
          descricao: 'Este suco de laranja é como um raio de sol engarrafado. Feito com as laranjas mais suculentas e maduras, cada gole é uma explosão de frescor cítrico, despertando os sentidos com seu sabor vibrante e natural. Sua doçura equilibrada com um toque sutil de acidez faz deste suco uma ode à simplicidade e à delícia inigualável da fruta',
          categoria: [
              categorias[2]
          ],
          favorito: false,
          avaliacao: 4
      }
  ],
  sobremesas:[
      {
          id: 1,
          nome: 'Torta de Maçã Caramelizada com Sorvete de Baunilha:',
          preco: 'R$ 15,00',
          foto: '',
          descricao: 'Uma obra-prima de sabores reconfortantes, nossa torta de maçã caramelizada é um convite ao aconchego. Fatias generosas de maçãs frescas, levemente caramelizadas e envoltas em uma mistura de especiarias sutis, são abraçadas por uma massa folhada delicadamente crocante. Assim que você mergulha a colher, é recebido por um contraste de temperaturas quando o sorvete de baunilha cremoso se derrete sobre a torta ainda morna. Cada garfada é uma sinfonia de texturas e sabores - o doce suave das maçãs contrastando com a cremosidade gelada do sorvete, criando uma experiência que aquece o coração e agrada o paladar.',
          categoria: [
              categorias[4]
          ],
          favorito: false,
          avaliacao: 5
      }
  ]
}



module.exports={
  categorias,
  produtos,
  usuarios
}