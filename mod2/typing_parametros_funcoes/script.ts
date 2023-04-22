// Contextual Typing = O TS verifica o contexto do código e com base nele determina types sem que o programador necessite determinar esse type
let names = ["Giovane", "Souza"];

names.forEach(function(nome){
    console.log(nome.toUpperCase());
})