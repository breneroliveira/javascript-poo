class Pessoa {
    #nome; // Significa que o atributo está privado.
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    // Nesse caso, não será possível alterar um atributo sem o setter.
    set nome(nome) {
        this.#nome = nome;
    }

    set idade(idade) {
        this.#idade = idade;
    }

    #privateMethod() { // Método privado.
        return '..';
    }

    apresentar() {
        return `O meu nome é ${this} e tenho ${this.idade} anos.`
    }

    toJSON() {
        return {
            nome: this.nome, // Retorna o getter de nome.
            idade: this.idade // Retorna o getter de nome.
        }
    }
}

const p1 =  new Pessoa("Pedro", 21);

// Alterações feitas a partir no método set.
p1.nome = 'Ana';
p1.idade = 23

console.log(p1.nome);
console.log(p1.idade);
console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));
console.log(p1.apresentar());

for(var attrib in p1) {
    console.log(p1[attrib], attrib);
}