var pessoa = (function(nome, idade, sexo) {
    // Membros privados.
    var nome = nome;
    var idade = idade;
    var sexo = sexo;

    var getNome = function() { // Membro privado.
        return nome;
    }

    var getIdade = function() { // Membro privado.
        return idade;
    }

    var getSexo = function() { // Membro privado.
        return sexo;
    }

    var metodos = { // Privado, são métodos privilagiados, precisam do return. A integridade é mantida.
        // Membro privilegiado.
        getNome:getNome, // O membro privado é dosponibilizado pela prorpiedade pública getNome.
        getIdade:getIdade,
        getSexo:getSexo
        /*getNome:function() { // É possível acessar a propriedade privada nome por conta da função.
            return nome;
        }*/
    }

    Object.freeze(metodos); // Impede que as propriedades sejam alteradas.

    return metodos;

})('Rodrigo', 28, 'M');

console.log(pessoa.getSexo());