const nome: string = 'Giovane';


function welcome(nome: string): string {
    return 'Olá, ' + nome + ', seja bem vindo(a)!'
  
}

welcome('Giovane');

/*
Fica monitorando o arquivo. Todas as alterações são realizadas automaticamente no script.js
Executar no prompt => tsc src/script.ts -w OU tsc src/script.ts --watchMode
*/ 