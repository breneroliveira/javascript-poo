var pessoa = {
    nome:'Rodrigo',
    _idade:29,
    _sexo:'Masculino',
    casado:false,
    state:'pristine',
    get idade() {
        this.state = 'dirty';
        return this._idade;
    },
    set idade(value) {
        this._idade = value;
    }
};

Object.defineProperty(pessoa, 'sexo', { // Atributo de acesso para a propriedade 'sexo'.
    get:function() {
        return this._sexo;
    },
    set:function(value) {
        this._sexo = value;
    }
});

pessoa.sexo = 'Feminino';

var sexo = pessoa.sexo;
console.log(sexo);

Object.defineProperty(pessoa, 'idade', {
    enumerable:false, // Se não é enumerável, não aparece no laço de iteração.
    configurable:false
});

Object.defineProperty(pessoa, "nome", { // Define se a propriedade é ou não configurável.
    enumerable:false,
    configurable:false, // Faz com que a propriedade seja sempre parte do objeto.
    value:'Roberto', // Fala que nome vai receber 'Roberto', não poderá ser alterado.
    writable:false // Não poderá ser reescrita.
}); // Isso quer dzer que a propriedade não pode ser removida, mas pode ser atualizada.

delete pessoa.nome;

//pessoa.nome = 'João';

console.log(pessoa);
console.log(pessoa.propertyIsEnumerable("idade"));

for(propriedade in pessoa) { // Percorrendo o objeto e armazenando em "propriedade".
    console.log(propriedade);
}

console.log('----------------------------------------------');