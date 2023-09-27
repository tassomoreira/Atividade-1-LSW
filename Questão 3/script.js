let inputPreçoGasolina = document.querySelector("#inputPreçoGasolina");
let inputPreçoAlcool = document.querySelector("#inputPreçoAlcool");
let inputBotao = document.querySelector("#inputBotao");
let spanResultado = document.querySelector("#spanResultado");

function calcularMelhorCombustivel(preçoGasolina, preçoAlcool) {
    let resultado = preçoAlcool / preçoGasolina;
    if(resultado > 0.7)
        return 0; 
    else
        return 1;
}

 inputBotao.addEventListener("click", function() {
    let preçoGasolina = Number(inputPreçoGasolina.value);
    let preçoAlcool = Number(inputPreçoAlcool.value);

    switch(calcularMelhorCombustivel(preçoGasolina, preçoAlcool)) {
        case 0:
            spanResultado.textContent = "A gasolina é o melhor combustível para abastecer no momento";
            break;
        case 1:
            spanResultado.textContent = "O alcool é o melhor combustível para abastecer no momento";
            break;
    }
 });

 