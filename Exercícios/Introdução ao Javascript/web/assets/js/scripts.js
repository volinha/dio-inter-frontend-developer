var numeroAtualWrapper = document.getElementById('currentNumber');
var numeroAtual = 0;

function incrementa() {
    numeroAtual = numeroAtual + 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
}

function decrementa() {
    numeroAtual = numeroAtual - 1;
    numeroAtualWrapper.innerHTML = numeroAtual;
}