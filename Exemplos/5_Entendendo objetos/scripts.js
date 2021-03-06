var pessoa = {};
pessoa.nome = 'Rodrigo';
pessoa.idade = 29;
pessoa.sexo = 'Masculino';
pessoa.casado = true;

if(pessoa.hasOwnProperty("casado")) { // Verifica se há a propridade no objeto.
    delete pessoa.casado;
}

for(propriedade in pessoa) {
    console.log(propriedade);
    console.log(pessoa[propriedade]);
}

console.log('-----------------------------------------------------------');

var i, size;
var propridade = Object.keys(pessoa);

for(i = 0, size = propridade.length; i < size; i++) {
    console.log(propridade[i]); // Mostra a propriedade.
    console.log(pessoa[propridade[i]]); // Mostra o valor da propriedade.
}

console.log('-----------------------------------------------------------');

console.log(propridade);

console.log(pessoa.propertyIsEnumerable("lengh")); // Propriedade não enumerável.

// É POSSÍVEL ITERAR AS PROPRIEDADES DE UM OBJETO PORQUE ELE TEM NATUREZA DINÂMICA.