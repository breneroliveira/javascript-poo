// Herança.
/*class a {
    first() {
        return 1;
    }

    second() {
        return 'Não.';
    }
}

class b extends a {
    third() {
        return 3;
    }
}

const obj = new b();*/

// Composição.
const a = {
    first() {
        return 1;
    }
}

const b = {
    second() {
        return 'Não.';
    }
}

const c = {
    third() {
        return 3;
    }
}

const obj = {
    ...a,
    ...c
}

console.log(obj);