function Pessoa(nome, idade, sexo) { // Construtor.
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

var makePessoa = function(nome, idade, sexo) { // Factory function.
    return { // Retorna o objeto.
        constructor:makePessoa,

        nome:nome,
        idade:idade,
        sexo:sexo,
        getIdade:function() {
            return this.idade;
        }
    }
}

var rodrigo = new Pessoa('Rodrigo', 21, 'M'); // Instância de Pessoa, objeto.
var roberto = makePessoa('Roberto', 32, 'M');

var pessoaCriada = Object.create(roberto, { // Herda as propriedades de makePessoa, a única propriedade exclusiva de pessoaCriada é endereco.
    endereco: {
        value:'Rua Tal',
        writable:true,
        configurable:true,
        enumerable:true
    }
});

console.log(roberto.getIdade());
console.log(pessoaCriada);
console.log(pessoaCriada.getIdade());