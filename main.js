const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt= emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt= emoji decepcionado" />'
const atividades = [];
const notas = [];
const spanaprovado = '<span class="resultado aprovado">aprovado</span>'
const spanreprovado = '<span class="resultado reprovado">reprovado</span>'
const notaminima = parseFloat(prompt("digite a nota minima:"))


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizamediafinal();
});

function adicionalinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`a atividade: ${inputNotaAtividade.value} ja foi inserida`)
    } else {
    
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaminima  ? imgAprovado : imgReprovado}</td>`;
        linha +='</tr>'
    
        linhas += linha;
        
    }


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizatabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizamediafinal() {
    const mediafinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= notaminima  ? spanaprovado : spanreprovado 
}
function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i =0; i < notas.length; i++){
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length
}