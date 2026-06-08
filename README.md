# Conversor de Criptomoedas

Projeto desenvolvido com **HTML, CSS e JavaScript** para a disciplina **Programação para Internet I**, permitindo a consulta em tempo real do preço de pares de criptomoedas e moedas fiduciárias através da API pública da Binance.

<br/>

<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

</div>

---

## 📝 Descrição do Projeto

A aplicação permite consultar cotações em tempo real combinando uma **Moeda Base** (BTC, ETH, SOL, BNB, entre outras) com uma **Moeda de Conversão** (USDT, BRL, EUR, etc.). Os dados são obtidos diretamente da Binance, sendo apresentados em uma interface moderna, intuitiva e responsiva.

O projeto foi desenvolvido utilizando apenas tecnologias nativas da web, aplicando conceitos de consumo de APIs REST, manipulação do DOM e tratamento de eventos com JavaScript.

---

## 🚀 Funcionalidades

* 🔍 Consulta em tempo real do preço de pares de moedas.
* 🔄 Inversão automática entre moeda base e moeda de conversão.
* 🧹 Limpeza rápida dos campos de busca.
* 💰 Formatação automática dos valores monetários.
* 📝 Sugestões automáticas de moedas utilizando `<datalist>`.
* ⚠️ Tratamento de erros para pares inexistentes.
* 📱 Layout responsivo para dispositivos móveis.

---

## 🌐 API Utilizada

### Binance API

A aplicação utiliza o endpoint de ticker da Binance para consultar o preço atual de um par de moedas.

```javascript
https://api.binance.com/api/v3/ticker/price?symbol=
```

### Informações obtidas

* Símbolo do par consultado
* Valor atual da cotação
* Atualização em tempo real diretamente da Binance

### Exemplo

```javascript
BTCUSDT
ETHBRL
SOLUSDT
```

---

## 🏗️ O que foi desenvolvido

* Estrutura semântica utilizando HTML5.
* Formulários de entrada com sugestões automáticas através de `<datalist>`.
* Estilização responsiva utilizando CSS3.
* Organização dos controles utilizando Grid Layout.
* Consumo de API REST com Fetch API.
* Manipulação dinâmica do DOM.
* Tratamento de erros e validações de entrada.
* Conversão e formatação de dados monetários.

---

## ⚡ Principais Desafios Encontrados

### Integração com a API da Binance

Foi necessário compreender o formato exigido pela API, concatenando corretamente os símbolos das moedas para formar pares válidos.

### Validação dos Dados

Garantir que o usuário não realizasse consultas vazias ou inválidas, utilizando:

```javascript
toUpperCase()
trim()
```

para padronizar os dados antes da requisição.

### Formatação Monetária

Transformar os valores retornados pela API em um formato amigável para usuários brasileiros utilizando:

```javascript
toLocaleString('pt-BR')
```

### Troca de Moedas

Implementar a funcionalidade de inversão entre moeda base e moeda de conversão sem recarregar a página.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia           | Uso                          |
| -------------------- | ---------------------------- |
| HTML5                | Estrutura da aplicação       |
| CSS3                 | Estilização e responsividade |
| JavaScript (Vanilla) | Lógica da aplicação          |
| Fetch API            | Consumo da API da Binance    |

---

## 📁 Estrutura de Pastas

```bash
Conversor_de_Moeda-PPI-I/
├── index.html
├── conversao-criptomoedas.css
├── conversao-criptomoedas.js
└── README.md
```

---

## ⚙️ Como Executar o Projeto

### Clone o repositório

```bash
git clone https://github.com/matheusydev/Conversor_de_Moeda-PPI-I.git
```

### Entre na pasta

```bash
cd Conversor_de_Moeda-PPI-I
```

### Execute

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** do VS Code.

---

## 🎓 Aprendizados Adquiridos

✅ Consumo de APIs REST financeiras.

✅ Manipulação de DOM (Document Object Model).

✅ Programação assíncrona com Fetch API.

✅ Tratamento de erros em requisições HTTP.

✅ Formatação de números e valores monetários em JavaScript.

✅ Organização e separação de responsabilidades entre HTML, CSS e JavaScript.

✅ Desenvolvimento de interfaces responsivas.


