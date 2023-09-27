let inputBotao = document.querySelector("#inputBotao");
let unList = document.querySelector("#unList");

function gerarNumero() {
    return Math.floor(Math.random() * 100);
}

inputBotao.addEventListener("click", function() {
    let listItem = document.createElement("li");
    listItem.textContent = gerarNumero();
    unList.appendChild(listItem);
});

