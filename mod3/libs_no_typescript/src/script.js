"use strict";
const nome = 'Giovane';
function welcome(nome) {
    return 'Olá, ' + nome + ', seja bem vindo(a)!';
}
welcome('Giovane');
/*
Comando (Executar com o prompt): tsc --init

Ao executar este comando o arquivo tsconfig.json é gerado.

Com esse arquivo gerado, ao executar o comando >> tsc <<, ele verifica todo o projeto, busca todos os arquivos TS e com base nele gera os JS.
*/ 
