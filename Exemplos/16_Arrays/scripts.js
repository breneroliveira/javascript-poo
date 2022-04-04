// Arrays também são objetos JavaScripts.
// Se há métodos, é array.
var carros = ['Vectra', 'Gol', 'Centra']; // Está no escopo global.

carros.pop(); // Remove o último elemento do vetor.
carros.push('L200'); // Insere elemento no final vetor.
carros.shift(); // Remove o primeiro elemento do array.
carros.unshift('Uno'); // Insere um elemento no início do vetor.

//console.log(carros.length); // Tamanha do array.

carros.splice(1, 1); // Remove e retona o item removido.

var getCarro = function(posicao, qtd) { // Busca dinâmica.
    var carros = ['Vectra', 'Gol', 'Centra'];

    return carros.splice(posicao, qtd);
}

var NovosCarros = carros.slice();
console.log(NovosCarros);

var carro = NovosCarros[1];
console.log(carro);

NovosCarros.forEach(function(item, indice) {
    console.log(indice, item);
});