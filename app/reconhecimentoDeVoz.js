window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

if (window.SpeechRecognition === null) {
    alert("Seu navegador não suporta o recurso de reconhecimento de voz. Por favor, mude de navegador.");
}

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

var chute;

const elementoChute = document.getElementById('chute');

recognition.addEventListener("result", onspeak);

function onspeak(event) {
    chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

function fimDeJogo(chute) {
    if (Number(chute) === numeroSecreto || chute === "game over") {
        recognition.stop();
    } else {
        recognition.start();
    }
}

recognition.addEventListener("end", (event) => {
    fimDeJogo(chute);
});