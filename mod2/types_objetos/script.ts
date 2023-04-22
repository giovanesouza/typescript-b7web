/*
Inserir os dois pontos ':' abrir e fechar chaves e inserir propriedadeObjeto: type, propriedadeObjeto: type de todas as propriedades do objeto que forem utilizadas na função.
*/

function resumo(usuario: {nome: string, idade: number}) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
}

// Implementação da função
let u = {
  nome: "Giovane",
  idade: 90
};

// Utilizando a função
console.log(resumo(u));
