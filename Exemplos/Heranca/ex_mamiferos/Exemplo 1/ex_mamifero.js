// Classe pai.
class Mamifero {
    constructor(especie, nome, idade) {
        this.especie = especie;
        this.nome = nome;
        this.idade = idade;
        this.glandulaMamaria = true;
    }

    incrementarIdade() { // Método.
        this.idade++;
    }
}

// Classe filha (herdada).
class Leao extends Mamifero {
    constructor(especie, nome, idade, comerHumano) {
        super(especie, nome, idade); // Serve para não precisar colocar as propriedades da classe pai novamente.
        // Invoca o constructor da classe pai, da classe Mamifero.
        this.comerHumano = comerHumano;
    }

    comerZebras(animais) {
        return animais.filter(animal => animal.especie !== 'zebra');
    }
}

// Objeto a partir da classe Mamifero.
const zeca = new Mamifero('zebra', 'Zeca', 6);
const pompeu = new Mamifero('gnu', 'Pompeu', 5);
const angus =  new Mamifero('cavalo', 'Angus', 3);
const mufasa = new Mamifero('leão', 'Mufasa', 7, false);

const animais = [zeca, pompeu, angus];

console.log(mufasa);