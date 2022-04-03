function Pessoa(nome, idade, sexo) { // Função construtora.
    this._nome = nome;
    this.idade = idade;
    this.sexo = sexo;

    Object.defineProperties(this, {
        _nome:{
            enumerable:true,
            configurable:true,
            writable:true
        },
        nome: {
            get:function() {
                return this._nome;
            },
            set:function(value) {
                this._nome = value;
            }
        }
    });
    Object.preventExtensions(this);
}

var rodrigo = new Pessoa('Rodrigo', 29, 'M');
rodrigo.endereco = 'Rua Tal';
console.log(rodrigo);
console.log(rodrigo instanceof Pessoa); // Ver se rodrigo foi construido a partir de Pessoa.
console.log(rodrigo.constructor === Pessoa);

rodrigo.nome = 'José';

for(propriedade in rodrigo) {
    console.log(propriedade + ' = ' + rodrigo[propriedade]);
}