// Inserir uma INTERROGAÇÃO '?' depois da propriedade - antes dos ':' - do objeto torna-o OPCIONAL.
function resumo(usuario: { nome: string; idade?: number }) {

  // A executação muda conforme inserção de dados
  if (usuario.idade !== undefined) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`;
  } else {
    return `Olá ${usuario.nome}, tudo bem?`;
  }
}

// Implementação da função
let u = {
  nome: "Giovane",
  idade: 90
};

// Utilizando a função
resumo(u);
