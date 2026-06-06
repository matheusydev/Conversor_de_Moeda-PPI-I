
function getByID(id) {
    return document.getElementById(id);
}

let botaoConsultar = getByID('botaoConsultar');
botaoConsultar.addEventListener('click', consultarPreco);

function consultarPreco() {

    let moedaBase = getByID('moedaBase').value.toUpperCase();
    let moedaConversao = getByID('moedaConversao').value.toUpperCase();
    let resultado = getByID('resultado');

    //implemente a chamada à fetch API
    let symbol = moedaBase + moedaConversao
    let url = `https://api.biance.com/api/v4/ticket/price?symbol=` + symbol;
    fetch(url).
    then(response => {
        if (!response.ok) { 
            throw new Error('Erro na resposta:' + response.status);
        }
        return response.json();
    })
    .then(json => {
        resultado.innerHTML = `
        <p>Moeda base ${moedaBase}:</p>
        <p>Valor em ${moedaConversao}: ${json.price}</p>`
    })
    .catch(error => {
        resultado.innerHTML = "Erro ao realizar conversão" + error;
    })
}