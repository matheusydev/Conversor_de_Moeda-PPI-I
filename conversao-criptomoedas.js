// Função auxiliar para buscar elementos pelo ID
function getByID(id) {
    return document.getElementById(id);
}

// Captura os botões do HTML
let botaoConsultar = getByID('botaoConsultar');
let botaoLimpar = getByID('botaoLimpar');
let botaoInverter = getByID('botaoInverter');

// Adiciona os eventos de clique aos botões
botaoConsultar.addEventListener('click', consultarPreco);
botaoLimpar.addEventListener('click', limparCampos);
botaoInverter.addEventListener('click', inverterMoedas);

// Limpa os campos de entrada e o resultado exibido
function limparCampos() {
    getByID('moedaBase').value = '';
    getByID('moedaConversao').value = '';
    getByID('resultado').innerHTML = '';
    getByID('moedaBase').focus();
}

// Inverte os valores da moeda base e da moeda de conversão
function inverterMoedas() {
    let moedaBase = getByID('moedaBase');
    let moedaConversao = getByID('moedaConversao');
    let valorTemporario = moedaBase.value;

    moedaBase.value = moedaConversao.value;
    moedaConversao.value = valorTemporario;
}

// Formata o valor para o padrão brasileiro: xxx.xxx.xxx,xx
function formatarValor(valor) {
    return Number(valor).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function consultarPreco() {

    // Captura, remove espaços extras e transforma as moedas em letras maiúsculas
    let moedaBase = getByID('moedaBase').value.trim().toUpperCase();
    let moedaConversao = getByID('moedaConversao').value.trim().toUpperCase();
    let resultado = getByID('resultado');

    // Atualiza os campos com os valores tratados
    getByID('moedaBase').value = moedaBase;
    getByID('moedaConversao').value = moedaConversao;

    // Validação básica: campos não podem estar vazios
    if (!moedaBase || !moedaConversao) {
        resultado.innerHTML = '<p class="erro">Preencha a moeda base e a moeda de conversão antes de consultar.</p>';
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
                <p><strong>Valor em ${moedaConversao}:</strong> ${formatarValor(json.price)}</p>
            `;
        })
        .catch(error => {
            // Trata erros de rede ou erros lançados manualmente
            resultado.innerHTML = '<p class="erro">Erro ao realizar conversão: ' + error.message + '</p>';
        });
}