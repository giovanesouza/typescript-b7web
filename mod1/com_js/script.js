let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');
let botao = document.getElementById('calcular');
let res = document.getElementById('resultado');

function calcular(n1, n2) {
    // Independente do Type do input, a saída sempre será TEXTO - resultado sai incorreto (concatenação)
    //return n1 + n2;

    // Correção
    // Verifica se o tipo realmente é numérico
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    } else {
        // Forma 1 
       // n1 = parseInt(n1);
       // n2 = parseInt(n2);
       // return n1 + n2;

        // Forma 2  - adicionar '+' antes da variável converte o valor dela em NUMBER
        return +n1 + +n2;
    }
}

// Adiciona evento de clique ao botão
botao.addEventListener('click', function() {
    // insere o valor da operação no campo res
    res.innerHTML = calcular(numero1.value, numero2.value);
});