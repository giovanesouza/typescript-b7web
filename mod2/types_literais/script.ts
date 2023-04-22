// A variável só aceita o nome "Giovane". Qualquer outro valor não é aceito.
let nome: "Giovane" = "Giovane";

// nome = "Souza";

// Porém, no contexto acima a aplicação acaba sendo inútil, tendo em vista que constantes também não aceitam novos valores.

// APLICAÇÕES ÚTEIS

// EX1

// Neste caso, o alinhamento só pode receber os valores estabelecidos - Um OU Outro.
function mostrarTexto(texto: string, alinhamento: "left" | "right" | "center") {
  return `<div style=""text-align: ${alinhamento}>${texto}<div>`;
}

mostrarTexto("Giovane", "center");
mostrarTexto("Giovane", "left");
mostrarTexto("Giovane", "blabla"); // Não aceita este valor, pois ele não foi definido acima

// EX2 - Nos valores a serem setados abaixo podem receber número OU uma string com a palavra 'auto'

type Opcoes = {
  width: number;
  height: number;
};

function configurar(props: Opcoes | "auto") {}

configurar({ width: 100, height: 200 });
configurar("auto");
configurar("automatico"); // Não funciona, pois não aceita esse valor
