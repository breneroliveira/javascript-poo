// Arrays também são objetos JavaScripts.
// Se há métodos, é array.
var carros = ['Vectra', 'Gol', 'Centra']; // Está no escopo global.

//console.log(carros);

carros.pop(); // Remove o último elemento do vetor.
carros.push('L200'); // Insere elemento no final vetor.
carros.shift(); // Remove o primeiro elemento do array.
carros.unshift('Uno'); // Insere um elemento no início do vetor.

//console.log(carros.length); // Tamanha do array.
//console.log(carros);

carros.splice(1, 1); // Remove e retona o item removido.
//var carros = carros.splice(1, 2);
//console.log(carros);

var getCarro = function(posicao, qtd) { // Busca dinâmica.
    var carros = ['Vectra', 'Gol', 'Centra'];

    return carros.splice(posicao, qtd);
    //console.log(carros);
}

/*var NovosCarros = getCarro(1, 2);
console.log(NovosCarros);*/

var NovosCarros = carros.slice();
console.log(NovosCarros);

var carro = NovosCarros[1];
console.log(carro);

NovosCarros.forEach(function(item, indice) {
    console.log(indice, item);
});