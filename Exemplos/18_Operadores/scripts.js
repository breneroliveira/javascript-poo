var a = 10;
var b = 15;
var resultado = a / b;

console.log(resultado);

var cont = 20;

var contar = function() {
    //cont = cont - 1;
    return cont /= 2;
}

console.log(contar());
console.log(contar());

var nome = 'Rodrigo';
var sobreNome = ' Rocha';
var nomeCompleto = nome + sobreNome;

console.log(nomeCompleto);

// Operadores de comparação.
var valor = '10';

if(valor === 10) { // Operador de tripla igualdade verifica o valor e o tipo.
    console.log(valor);
}

if(valor !== 10) { // Operador de muito diferente.
    console.log(valor);
}

if(valor != 10) { // Operador de diferente.
    console.log(valor);
}

var valor1 = '10';
var valor2;

if(valor1 || valor2) { // O sinal de ou pode ser represetado assim || ou assim |.
    console.log(valor1, valor2);
} else {
    console.log('Não deu.');
}

// Operador ternário.
valor1 && valor2 ? console.log(valor1, valor2) : console.log('Não deu.');