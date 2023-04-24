// as HTMLButtonElement => Indica que é um botão

const botao = document.querySelector('button') as HTMLButtonElement;

botao.addEventListener('click', ()=> {
    console.log('Clicou');
});