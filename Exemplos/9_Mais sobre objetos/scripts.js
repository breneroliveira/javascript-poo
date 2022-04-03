var pessoa = {};

Object.defineProperties(pessoa, {
    _nome: {
        value:'Rodrigo',
        enumerable:true,
        configurable:false,
        writable:true
    },
    _sexo: {
        value: 'M',
        enumerable:true,
        configurable:true,
        writable:true
    },
    _idade: {
        value: 16,
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
    },
    sexo: {
        get:function() {
            return this._sexo;
        },
        set:function(value) {
            this._sexo = value;
        }
    }
});

// Vai acessar os atributos da propriedade.
// Parâmetros: objeto e a proprieade desejada.
//var atributo = Object.getOwnPropertyDescriptor(pessoa, 'nome');

//Object.preventExtensions(pessoa); // Evita a adição de novas proprieades ao objeto.
//console.log(Object.isExtensible(pessoa));

/*Object.seal(pessoa); // Verifica se o objeto está selado ou não.
console.log(Object.isSealed(pessoa)); // Mostra true ou false.
pessoa.endereco = 'Rua Tal';
console.log(pessoa);*/

Object.freeze(pessoa);
pessoa.nome = 'José';
console.log(Object.isFrozen(pessoa));