function getByID(id) {
    return document.getElementById(id);
}

let botaoConsultar = getByID('botaoConsultar');
botaoConsultar.addEventListener('click', consultarPreco);

function consultarPreco() {

    let moedaBase = getByID('moedaBase').value.toUpperCase();
    let moedaConversao = getByID('moedaConversao').value.toUpperCase();
    let resultado = getByID('resultado');

    // Validação básica: campos não podem estar vazios
    if (!moedaBase || !moedaConversao) {
        resultado.innerHTML = '<p style="color: red;">Preencha ambos os campos antes de consultar.</p>';
        return;
    }

    // Monta o symbol e a URL da API Binance
    let symbol = moedaBase + moedaConversao;
    let url = 'https://api.binance.com/api/v3/ticker/price?symbol=' + symbol;

    resultado.innerHTML = '<p>Consultando...</p>';

    fetch(url)
        .then(response => {
            // Verifica se a resposta HTTP foi bem-sucedida
            if (!response.ok) {
                throw new Error('Resposta inválida da API. Verifique os símbolos informados. (HTTP ' + response.status + ')');
            }
            return response.json();
        })
        .then(json => {
            // Exibe o resultado na div
            resultado.innerHTML = `
                <p><strong>Par consultado:</strong> ${json.symbol}</p>
                <p><strong>Moeda base:</strong> ${moedaBase}</p>
                <p><strong>Valor em ${moedaConversao}:</strong> ${parseFloat(json.price).toFixed(2)}</p>
            `;
        })
        .catch(error => {
            // Trata erros de rede ou erros lançados manualmente
            resultado.innerHTML = '<p style="color: red;">Erro ao realizar conversão: ' + error.message + '</p>';
        });
}