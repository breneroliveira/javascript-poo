var pegarNome = function(nome, sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    console.log(this); // Mostra todas as prorpiedades do objeto.
}

var pessoa = {
    nome:'Rodrigo',
    sobreNome:'Lima',
    idade:'29',
    getNome:pegarNome
};

var carros = {
    nome:'Gol',
    marca:'VW',
    getNome:pegarNome
};

pessoa.getNome(); // Nas chamadas, muda só os objetos (pessoa ou carros).
carros.getNome();

// 3 TIPOS DE MÉTODOS PARA MANIPULAR AS PROPRIEDADES (o valor de this) DAS FUNÇÕES DO OBJETO (por consequência, manipular as prorpiedades do objeto).
pegarNome.call(pessoa, 'Pedro', 'Rocha'); // Um dos métodos que pode ser utilizado para alterar a propriedade de um objeto.
// O primeiro parâmetro é o contexto onde o this será aplicado.
// O próximos, serão os parâmetros que serão passados para a função para que ela manipule o this.
// Nesse caso, o segundo parâmetro que refere ao primeiro que foi passado no método call.

// this se refere ao escopo onde a função é aplicada.

pegarNome.apply(pessoa, ['Pedro', 'Rocha']);
var getNome = pegarNome.bind(pessoa, 'Pedro', 'Rocha');
getNome();

// O primeiro parâmetro vai o objeto ao qual o this vai se referir e os demais vão referenciar os parâmetros da função do objeto.