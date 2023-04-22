/*
Pegando uma string do HTML, mas a variável é um number - RESOLVENDO O PROBLEMA:

Union Types = Types unidos Ou Types Opcionais. UM ou Outro.

Ex.: let idade: string | number = 26;
a variável idade pode receber tanto uma string quanto um number.

*/

let idade: string | number = 26;

idade = document.getElementById("idade").innerHTML;




// APLICAÇÃO EM FUNÇÃO

// Quando houver um parâmetro que tem mais de um tipo e será utilizado uma propriedade/método que é exclusiva para um dos tipos, OBRIGATORIAMENTE DEVE-SE VERIFICAR o tipo dentro da função.
function mostrarIdade(idade: string | number) {
  if (typeof idade === "string") {
    console.log(idade.toUpperCase());
  } else {
    console.log(idade);
  }
}

mostrarIdade(90);
mostrarIdade("90");
