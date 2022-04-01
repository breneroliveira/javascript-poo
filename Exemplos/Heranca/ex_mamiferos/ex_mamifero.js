class Mamifero {
    constructor(especie, nome, idade) {
        this.especie = especie
        this.nome = nome
        this.idade = idade
        this.glandulaMamaria = true
    }

    incrementarIdade() {
        this.idade++
    }
}

class Leao extends Mamifero {
    constructor(especie, nome, idade, comerHumano) {
        super(especie, nome, idade)
        this.comerHumano = comerHumano
    }

    comerZebras(animais) {
        return animais.filter(animal => animal.especie !== 'zebra')
    }
}

const zeca = new Mamifero('zebra', 'Zeca', 6)
const pompeu = new Mamifero('gnu', 'Pompeu', 5)
const angus =  new Mamifero('cavalo', 'Angus', 3)
const mufasa = new Mamifero('leão', 'Mufasa', 7, false)

const animais = [zeca, pompeu, angus]

console.log(mufasa)