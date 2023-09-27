let inputCelsius = document.querySelector("#inputCelsius");
let tempFahrenheit = document.querySelector("#tempFahrenheit");
let tempKelvin = document.querySelector("#tempKelvin");
let msgErro = document.querySelector("#msgErro");

function converterFahrenheit(tempCelsius) {
    return (tempCelsius * 1.8 + 32).toFixed(1);
}

function converterKelvin(tempCelsius) {
    return (tempCelsius + 273.15).toFixed(2);
}

inputCelsius.addEventListener("keyup", function() {
    let tempCelsius = parseInt(inputCelsius.value);
    if(isNaN(tempCelsius)) {
        tempFahrenheit.textContent = "-";
        tempKelvin.textContent = "-";
        msgErro.textContent = "Informe um valor válido";
    }
    else {
        tempFahrenheit.textContent = `Temperatura em Fahrenheit: ${converterFahrenheit(tempCelsius)}°F`;
        tempKelvin.textContent = `Temperatura em Kelvin: ${converterKelvin(tempCelsius)}K`;
        msgErro.textContent = "";
    }
});