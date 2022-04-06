var carros = ['Vectra', 'Gol', 'Centra'];

// 3 MÉTODOS PARA PERCORRER E FILTRAR UM ARRAY.
var resultado = carros.filter(function(value) { // .filter é usado para encontrar um elemento específico em um array.
    return value == 'Gol';
});

console.log(resultado);

/*carros.forEach(function(item) { // forEach também pode ser usado para encotrar um elemento específico em um array.
    if(item == 'Gol') {
        var carro = Array(item);
        console.log(carro);
    }
});*/

var result = carros.some(function(valor) { // Quando encontra um valor desses nos índice, retorna true.
    return valor == 'Camaro';
});

console.log(result);

var result2 = carros.find(function(valor) {
    return valor == 'Gol';
});

console.log(result2);

var numeros = [10, 15, 20];

/*var soma = function(total, numero) {
    return total + numero;
}*/

var res = numeros.reduce(function(total, numero) { // O primeiro parâmetro é o total da soma e o segundo parâmetro é o elemento do vetor.
    return total + numero;
});

console.log(res);