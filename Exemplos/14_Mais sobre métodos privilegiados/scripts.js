var pessoa = (function(nome, idade, sexo) {
    // Membros privados.
    var nome = nome;
    var idade = idade;
    var sexo = sexo;

    // Métodos privados.
    var getNome = function() { // Membro privado.
        return nome;
    }

    var getIdade = function() { // Membro privado.
        return idade;
    }

    var getSexo = function() { // Membro privado.
        return sexo;
    }

    var setNome = function(value) { // Membro privado.
        nome = value;
    }

    var setIdade = function(value) { // Membro privado.
        idade = value;
    }

    var setSexo = function(value) { // Membro privado.
        sexo = value;
    }

    var metodos = { // Membro privilegiado.
        // Métodos de leitura.
        getNome:getNome,
        getIdade:getIdade,
        getSexo:getSexo,

        // Métodos de reescrita de valores.
        setNome:setNome,
        setIdade:setIdade,
        setSexo:setSexo
    }

    Object.defineProperties(metodos, {
        getNome:{
            enumerable:false
        },
        getIdade:{
            enumerable:false
        },
        getSexo:{
            enumerable:false
        },
        setNome:{
            enumerable:false
        },
        setIdade:{
            enumerable:false
        },
        setSexo:{
            enumerable:false
        }
    });
    Object.freeze(metodos); // Impede que as propriedades sejam alteradas.

    return metodos;

})('Rodrigo', 28, 'M');

for(propriedade in pessoa) { // Não são métodos iteráveis porque estão como enumerable:false.
    console.log(propriedade);
}

pessoa.setSexo('F');
pessoa.setNome('Tereza');
console.log(pessoa.getNome());
console.log(pessoa.getSexo());