// Remoção de elemento da tela
// Seleciona o elemento >> manda ele como parâmetro >> Remove ele
function removerElemento(el: HTMLElement): void {
  el.remove();
}

removerElemento(document.getElementById("teste"));
