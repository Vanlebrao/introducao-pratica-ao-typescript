let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');

saldo.innerHTML = 0
campoSaldo.innerHTML = 0

function somarAoSaldo(soma) {
    saldo.innerHTML += soma;
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    saldo.innerHTML = '';
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});