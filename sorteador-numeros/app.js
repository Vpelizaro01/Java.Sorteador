
function numrandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    let resultado = (document.getElementById("resultado"))
    if (de > ate) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
    }
    let sorteados = [];
    for (let i = 0; i < quantidade; i++) {
        let numero = numrandom(de, ate);
        while (sorteados.includes(numero)) {
            numero = numrandom(de, ate);
        }
        sorteados.push(numero);
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
}

function alterarBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarBotao();
}
