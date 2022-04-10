class Person {
    constructor(name) {
        this._name = this._capitalize(name);
    }

    set name(string) { // Usa-se o nome da propriedade.
        this._name = this._capitalize(string);
    }

    get name() {
        return this._name;
    }

    _capitalize(string) {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

    walk() {
        return `${this._name} está andando.`
    }
}

class Developer extends Person {
    constructor(name, codeLanguage) {
        super(name);
        this._codeLanguage = codeLanguage;
    }

    code() {
        return `${this._name} está codando em ${this._codeLanguage}.`;
    }
}

var person = new Person('pedro');

person.name = 'fulano'; // Só funciona por conta do set.

console.log(person.walk());
console.log(person.name); // Só não fica como undefined por conta do get.

var brendan = new Developer('Brendan', 'JavaScript');
console.log(brendan.code());

var bert = new Developer('Bert', 'Java');
console.log(bert.code());