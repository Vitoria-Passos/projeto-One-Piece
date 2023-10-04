
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desselecionarbotao();
        desselecionarpersonagem();
 
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    });
});


function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    newFunction_1();
}

function newFunction_1() {
    newFunction();
}

function newFunction() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
//botoes.addeventlistener("click", () =>{
//  console.log("clicou no botao");
//});

