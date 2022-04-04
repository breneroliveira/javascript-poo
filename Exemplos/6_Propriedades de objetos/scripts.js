var pessoa = {
    nome:'Rodrigo',
    _idade:29,
    sexo:'Masculino',
    casado:false,
    state:'pristine', // Não foi usado, não foi modificado.
    get idade() { // Acessando uma propriedade de dados através de uma propriedade de acesso. Pega a idade.
        // A propeiedade de dados getter serve para ler as propriedades de dados.
        this.state = 'dirty'; // Foi modificado.
        return this._idade;
    },
    set idade(value) {
        // A propriedade de dados setter serve para modificar as propriedade de dados;
        this._idade = value;
    }
    // Quando uma propriedade for modificada e uma ação precisar ser tomada, usa-se getter e setter.
    // Se for apenas modificar uma propriedade, não precisa de getter e setter.
};

//pessoa.idade = 21; // Nesse formato o qual a propriedade está recebendo um dado, está usando um setter.
console.log(pessoa.idade); // Nesse formato, está usando um getter.
console.log(pessoa.state);
console.log(pessoa.nome = 'José'); // Sem getter e setter.