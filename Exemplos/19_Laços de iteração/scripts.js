// Nós aprendemos a varrer arrays com for(var in objeto) e forEach.
// Agora: laço for e while.
var contador = 0;
var limite = 15;

var mostrar = function(valor) {
    return 'mostrar' + ' ' + valor;
}

while(contador < limite) {
    contador++;
    //console.log(contador);
    console.log(mostrar(contador));
}

console.log('---------');

for(var i = 1; i <= 15; i++) {
    console.log(mostrar(i));
}