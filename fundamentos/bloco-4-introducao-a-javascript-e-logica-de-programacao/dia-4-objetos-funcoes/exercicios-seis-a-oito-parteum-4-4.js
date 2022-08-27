let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
  };

  let livroFavorito = leitor.livrosFavoritos[0];
  console.log("O livro favorito de " + leitor.nome + ' ' + leitor.sobrenome + ' se chama \'' + livroFavorito['titulo'] + '\'.'); 

  let segundoLivro = leitor.livrosFavoritos[leitor.livrosFavoritos.length - 1];
  console.log("Os livros favoritos de " + leitor.nome + " " + leitor.sobrenome + " se chamam \'" + livroFavorito['titulo'] + '\' e \'' + segundoLivro['titulo'] + '\'.');