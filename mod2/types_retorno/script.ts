// A tipagem do retorno é especificada após os parênteses da função => (): tipo
function firstLetterUpperCase(name: string): string {
  let firstLetter = name.charAt(0).toUpperCase(); // Pega a primeira letra e coloca em caixa alta
  return firstLetter + name.substring(1); // Pega a primeira letra e concatena com o restante
}

firstLetterUpperCase("giovane"); // Giovane


function somar(n1: number, n2: number): number {
  return n1 + n2;
}
