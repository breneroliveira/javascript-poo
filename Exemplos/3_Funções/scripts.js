var mostrarNome = function(nome, sobreNome) {
    var qtd = arguments.length; // Arguments é um array.

    console.log(arguments[0]);
    var nomeCompleto = '';

    while(qtd > 0) {
        nomeCompleto += ' ' + arguments[qtd - 1];
        qtd--;
    }

    console.log(nomeCompleto);
}

mostrarNome('Rodrigo', 'Lima', 'Rocha');