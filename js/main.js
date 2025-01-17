// variaveis
const scoreYou = document.querySelector(".number_you");
const scoreBot = document.querySelector(".number_bot");
const pedra = document.querySelector(".pedra");
const papel = document.querySelector(".papel");
const tesoura = document.querySelector(".tesoura");
const yourChoice = document.querySelector(".voce");
const botChoice = document.querySelector(".bot");
const container = document.querySelector(".resultado");

let resultDiv;
// Funções
const jokenpo = [pedra, papel, tesoura]
function randomImg(){
    return Math.floor(Math.random() * jokenpo.length); 
    // *
}

function addDiv(){
    resultDiv = document.createElement("div");
    resultDiv.classList.add("resultado_div");
    resultDiv.innerHTML = `
        <div class="column">
            <p>Você</p>
            <img src="img/pedra.png" alt="SuaEscolha" class="voce">
            </div>
            <div class="column">
            <p class="left">BOT</p>
            <img src=${jokenpo[randomImg()].src} alt="EscolhaBot" class="bot">
        </div>`;

    container.appendChild(resultDiv)
}

function choice(imagem){
    if (resultDiv) {
        let img = resultDiv.querySelector(".voce")
        let botImg = resultDiv.querySelector(".bot")
        botImg.src =`${jokenpo[randomImg()].src}`
        img.src = imagem.src
    }
}

function results(){
    let img = resultDiv.querySelector(".voce")
    let botImg = resultDiv.querySelector(".bot")

    // terminar essa parte usando switch case!!!
}


// Eventos

window.addEventListener("load",() =>{
    addDiv()
})
pedra.addEventListener("click", () =>{
    choice(pedra)
});
papel.addEventListener("click", () =>{
    choice(papel)
    console.log("certo")
});
tesoura.addEventListener("click", () =>{
    choice(tesoura)
});