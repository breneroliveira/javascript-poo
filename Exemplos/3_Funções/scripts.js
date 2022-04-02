/*function mostraNome() {
    console.log('Rodrigo declaração');
}

mostraNome();*/

var mostrarNome = function(nome, sobreNome) {
    var qtd = arguments.length; // arguments é um array.
    //console.log(arguments.length);
    console.log(arguments[0]);
    var nomeCompleto = '';

    while(qtd > 0) {
        nomeCompleto += ' ' + arguments[qtd - 1];
        qtd--;
    }

    console.log(nomeCompleto);
    //return qtd;
}

mostrarNome('Rodrigo', 'Lima', 'Rocha');
//console.log(nome);