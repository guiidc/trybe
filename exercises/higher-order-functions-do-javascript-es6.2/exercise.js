const assert = require('assert');
const { copyFileSync } = require('fs');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
    const item = books.find((v) => v.author.birthYear === 1947);
    return item.author.name;
  }
  
  assert.strictEqual(authorBornIn1947(), 'Stephen King');
////////////////////////////////////////////////////////////////////////////////
// 2 - Retorne o nome do livro de menor nome.

function smallerName() {
    let nameBook;
    books.forEach((v, i) => {
        if (i === 0) nameBook = v.name;
        if (v.name.length < nameBook.length) nameBook = v.name;
    })
    return nameBook;
  }

  smallerName();
  
  assert.strictEqual(smallerName(), 'Duna');
////////////////////////////////////////////////////////////////////////////////
// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

  const expectedResult = {
    author: {
      birthYear: 1948,
      name: 'George R. R. Martin',
    },
    genre: 'Fantasia',
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    releaseYear: 1991,
  };
  
  function getNamedBook() {
    let length26 = books.find((v) => v.name.length === 26);
    return length26;
  }
  
  assert.deepStrictEqual(getNamedBook(), expectedResult);
////////////////////////////////////////////////////////////////////////////////

// 4 - Ordene os livros por data de lançamento em ordem decrescente.
const expectedResult2 = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: { name: 'George R. R. Martin', birthYear: 1948 },
      releaseYear: 1991,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: { name: 'Stephen King', birthYear: 1947 },
      releaseYear: 1986,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: { name: 'Frank Herbert', birthYear: 1920 },
      releaseYear: 1965,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: { name: 'Isaac Asimov', birthYear: 1920 },
      releaseYear: 1951,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: { name: 'H. P. Lovecraft', birthYear: 1890 },
      releaseYear: 1928,
    },
  ];
  
  function booksOrderedByReleaseYearDesc() {
    return books.sort((a, b) => {
        return a.releaseYear - b.releaseYear
    }).reverse();
  }
  
  assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult2);
////////////////////////////////////////////////////////////////////////////////
// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const expectedResult3 = false;

function everyoneWasBornOnSecXX() {
  return books.every((v) => v.author.birthYear >= 1901 && v.author.birthYear <= 2000)
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult3);

////////////////////////////////////////////////////////////////////////////////
// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const expectedResult4 = true;

function someBookWasReleaseOnThe80s() {
  return books.some((v) => v.releaseYear >= 1980 && v.releaseYear <= 1989);
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult4);

////////////////////////////////////////////////////////////////////////////////
// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const expectedResult5 = false;

function authorUnique() {
    let result = true
    const allBirthYears =  [];
    books.forEach((v) => {
        if (allBirthYears.indexOf(v.author.birthYear) === -1) allBirthYears.push(v.author.birthYear);
        if(allBirthYears.indexOf(v.author.birthYear) !== -1) result = false;
    });
    return result;
}

assert.strictEqual(authorUnique(), expectedResult5);

// authorUnique();