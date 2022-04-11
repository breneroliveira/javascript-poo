function Student(name, email) {
    console.log(this);
    this.name = name;
    this.email = email;
}

Student.prototype.login = function login() {
    return `${this.name} fez login.`;
}

Student.prototype.comment = function comment() {
    return `${this.name} comentou.`;
}

function TeacherAssistant(name, email) {
    Student.call(this, name, email); // Invoca uma determinada função.
    this.scheduledWeekPosts = this.scheduledWeekPosts;
}

TeacherAssistant.prototype = Object.create(Student.prototype);

TeacherAssistant.prototype.giveBadge = function giveBadge({name}) {
    return `${this.name} deu uma medalha.`;
}

//const gabrielFialho = new Student('Gabriel Fialho', 'gabrielfialho@rogermelo.com.br');
const brenoLemos = new Student('Breno Lemos', 'brenolemos@rogermelo.com.br');

const arthurSouza = new TeacherAssistant('Arthur Souza', 'arthursouza@rogermelo.com.br', false);

console.log(brenoLemos, arthurSouza);
console.log(arthurSouza.giveBadge(brenoLemos));
console.log(arthurSouza.login());
console.log(arthurSouza.login === brenoLemos.login);