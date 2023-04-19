// Especifica que é um elemento HTML e que tem VALUE => as HTMLInputElement
// A variável vai se comportar como um elemento INPUT do HTML. Ou seja, um elemento que tem value.
var numero1 = document.getElementById("numero1");
var numero2 = document.getElementById("numero2");
var botao = document.getElementById("calcular");
var res = document.getElementById("resultado");
// NomeParâmetro doisPontos TipoValor - indica que sempre virá um número, caso venha outro dará erro
function calcular(n1, n2) {
    return +n1 + +n2;
}
// Adiciona evento de clique ao botão
botao.addEventListener("click", function () {
    // insere o valor da operação no campo res
    // '+' antes da variável => converte-a em NUMBER
    // .toString() => Converte o valor da operação em String
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
