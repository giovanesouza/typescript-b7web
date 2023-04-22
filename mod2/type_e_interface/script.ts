// CRIAÇÃO DE TYPE


// Primeira forma

type NomeCompleto = string;
let nome: NomeCompleto = "Giovane";


// Uso em objeto

/*
type User = {
    nome: string,
    idade: number,
};

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Giovane',
    idade: 90
});

*/


// FORMA 2 - POR MEIO DE INTERFACES

interface User {
    nome: string;
    idade: number;
};

function resumo(usuario: User) {
    return `Olá ${usuario.nome}, você tem ${usuario.idade} anos`;
}

resumo({
    nome: 'Giovane',
    idade: 90
});