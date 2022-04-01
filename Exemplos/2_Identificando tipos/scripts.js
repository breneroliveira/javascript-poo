// PIRMEIRA FORMA
function mostraNome() { // Função.
    return 'Rodrigo';
}

var mostraNome = { // Objeto.
    'nome': 'Rodrigo'
};

var teste = (typeof mostraNome);

if(teste === 'function') { // if para saber se recebeNome é uma função ou não.
    var recebeNome = mostraNome();
} else {
    console.log('mostraNome não uma função.');
}

console.log(recebeNome);

// SEGUNDA FORMA
function showName() {
    return 'João';
}

if(showName instanceof Function) { // if para saber se showName é uma função ou não.
    var nome = showName();
}

console.log(nome);

// TESTE UTILIZANDO ARRAYS
var carros = ['Gol', 'Uno', 'Corolla'];
var auto = new Object();

if(auto instanceof Array) { // Idetifica se é array ou não.
    console.log(carros);
} else {
    console.log(typeof auto);
}

// É idicado usar o Array.isArray.
if(Array.isArray(carros)) {  // Idetifica se é array ou não (outra forma).
    console.log(carros);
}