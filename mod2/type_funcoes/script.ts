// A cada parâmetro especificar o type
function firstLetterUpperCase(name: string) {
  let firstLetter = name.charAt(0).toUpperCase(); // Pega a primeira letra e coloca em caixa alta
  return firstLetter + name.substring(1); // Pega a primeira letra e concatena com o restante
}

firstLetterUpperCase('giovane'); // Giovane