const menorValor = 1;
const maiorValor = 1000;

const dicaMenor = document.getElementById("menor-valor");
const dicaMaior = document.getElementById("maior-valor");

dicaMenor.textContent = menorValor;
dicaMaior.textContent = maiorValor;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}
