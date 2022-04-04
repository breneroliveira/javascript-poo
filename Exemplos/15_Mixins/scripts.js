function Pessoa(nome, idade, sexo) { // Construtor que cria o objeto Pessoa.
    if(this instanceof Pessoa) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
    } else {
        return new Pessoa(nome, idade, sexo);
    }
}

rodrigo = new Pessoa('Rodrigo', 21, 'M'); // Objeto criado de fato.

console.log(rodrigo instanceof Pessoa); // rodrigo foi criado a partir do construtor Pessoa.

console.log(rodrigo);