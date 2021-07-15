// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((c, v) => {
    for (let i = 0; i <v.length; i += 1) {
        if (v[i] === 'A' || v[i] === 'a') {
            c += 1
        }
    }
    return c;
  }, 0)
}

assert.deepStrictEqual(containsA(), 20);