var pessoa = {};

// Passa dois parâmetros: o objeto (pessoa) e o objeto de configuração (o que está entre chaves).
Object.defineProperties(pessoa, { // Definir múltiplas propriedades, é preciso especificar manualmente as configurações.
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
    nome: { // As propriedades de acesso mexem com _nome.
        get:function() {
            return this._nome;
        },
        set:function(value) {
            this._nome = value;
        }
    },
    sexo: { // As propriedades de acesso mexem com _sexo.
        get:function() {
            return this._sexo;
        },
        set:function(value) {
            this._sexo = value;
        }
    }
});

// Setters
pessoa.nome = 'Maria';
pessoa.sexo = 'F';

// Getters
console.log(pessoa.nome); 
console.log(pessoa.sexo);

console.log(pessoa);