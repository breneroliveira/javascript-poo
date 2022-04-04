// TIPOS PRIMITIVOS
var valor = 18;
var sexo = 'f';
var nome = 'Rodrigo';
var existe = false;
var endereco = null;

var primeiroChar = nome.charAt(2);
var varNomeMaiusculo = nome.toLocaleUpperCase();

// TIPOS DE REFERÊNCIA (CONSTRUÇÃO DE OBJETOS).
var pessoa = new Object(); // Usou o método construtor para criar o objeto.

var pessoa2 = {
    'nome':'Rodrigo',
    'idade':'21',
    'sexo':'M'
}; // Usou a forma literal para constuir o objeto.

console.log(pessoa2);

//--------------------------------------------------------------------

var mostraNome = new Function("console.log('Rodrigo');"); // Usou o método construtor para criar a função.
mostraNome(); // Chama a função.

function mostraIdade() {
    console.log('Idade é igual a ' + 15 + '.');
} // Usou a forma literal para constuir a função.
mostraIdade();

//--------------------------------------------------------------------

var carro = new Array('Gol', 'Polo', 'Focus'); // Usou o método construtor para criar o vetor.
console.log(carro); // Mostra o vetor.

var carros = ['Corsa', 'Celta', 'Palio']; // Usou a forma literal para constuir o vetor.
console.log(carros);

//--------------------------------------------------------------------