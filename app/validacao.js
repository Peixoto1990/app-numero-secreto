function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (encerraJogo(chute)) {
        document.body.style.backgroundColor = 'red';
        document.body.innerHTML = `
            <h2 style="font-weight: bold;">Fim de Jogo</h2>
            <button type="button" onclick="window.location.reload();">Jogar Novamente</button>
        `;
        return;
    }

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido.</div>';
        return;
    }

    if (numeroForMaiorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}.</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `<h2>Parabéns, você acertou!</h2> <h3>O número secreto era ${numeroSecreto}</h3>`;
        document.body.innerHTML += `<button type="button" onclick="window.location.reload();">Jogar Novamente</button>`;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

function encerraJogo(chute) {
    return chute === "game over";
}
