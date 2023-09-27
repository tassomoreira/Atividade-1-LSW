let inputBotao = document.querySelector("#inputBotao");
let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");
let span3 = document.querySelector("#span3");
let span4 = document.querySelector("#span4");
let span5 = document.querySelector("#span5");
let span6 = document.querySelector("#span6");

function rolarDados() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
}
inputBotao.addEventListener("click", function() {
    let qtd1 = 0, qtd2 = 0, qtd3 = 0, qtd4 = 0, qtd5 = 0, qtd6 = 0;
    for(let i = 0; i < 1000000; i++) {
        switch(rolarDados()) {
            case 1:
                qtd1++;
                break;
            case 2:
                qtd2++;
                break;
            case 3:
                qtd3++;
                break;
            case 4:
                qtd4++;
                break;
            case 5:
                qtd5++;
                break;
            case 6:
                qtd6++;
                break;
        }
        
    }
    span1.textContent = `Quantidade de vezes que o Nº 1 apareceu: ${qtd1}`;
    span2.textContent = `Quantidade de vezes que o Nº 2 apareceu: ${qtd2}`;
    span3.textContent = `Quantidade de vezes que o Nº 3 apareceu: ${qtd3}`;
    span4.textContent = `Quantidade de vezes que o Nº 4 apareceu: ${qtd4}`;
    span5.textContent = `Quantidade de vezes que o Nº 5 apareceu: ${qtd5}`;
    span6.textContent = `Quantidade de vezes que o Nº 6 apareceu: ${qtd6}`;
});