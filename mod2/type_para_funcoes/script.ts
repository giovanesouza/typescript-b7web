// Toda função que usar este type terá dois parâmetros numéricos e um retorno numérico
type MathFunction = (n1: number, n2: number) => number;


// Após o nome da função, inserir o type
const somar: MathFunction = (n1, n2) => {
    return n1 + n2;
}

const subtrair: MathFunction = (n1, n2) => {
    return n1 - n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: MathFunction = (n1, n2) => {
    return n1 / n2;
}

