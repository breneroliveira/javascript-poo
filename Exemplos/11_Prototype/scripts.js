function Pessoa(nome, idade, sexo) { // Construtor.
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

// Versão simplificada.
Pessoa.prototype = {
    constructor:Pessoa, // Prevenção para definir que o construtor é Pessoa, iniciar o prototype com isso.

    getNome:function() {
        return this.nome;
    },
    getIdade:function() {
        return this.idade;
    },
    getSexo:function() {
        return this.sexo;
    }
}

/*Pessoa.prototype.getNome = function() {
    return this.nome;
}

Pessoa.prototype.getIdade = function() {
    return this.idade;
}

Pessoa.prototype.getSexo = function() {
    return this.sexo;
}*/

var rodrigo = new Pessoa('Rodrigo', 21, 'M');
var joao = new Pessoa('João', 18, 'M');

console.log(rodrigo.getNome(), rodrigo.getIdade(), rodrigo.getSexo());
console.log(joao.getNome(), joao.getIdade(), rodrigo.getSexo());

console.log(rodrigo instanceof Pessoa); // O objeto rodrigo é uma instância de pessoa.
console.log(rodrigo.constructor === Pessoa); // A instância rodrigo é contruída a partir de Pessoa.