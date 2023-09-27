let inputBase = document.querySelector("#inputBase");
let inputExpoente = document.querySelector("#inputExpoente");
let inputBotao = document.querySelector("#inputBotao");
let div = document.querySelector("div");

const calcularPotencia = (base, expoente) => Math.pow(base, expoente);

inputBotao.addEventListener("click", function() {
    let base = Number(inputBase.value);
    let expoente = Number(inputExpoente.value);
    let paragrafo = document.createElement("p");
    paragrafo.textContent = `Resultado: ${calcularPotencia(base, expoente)}`;
    div.appendChild(paragrafo);
});

