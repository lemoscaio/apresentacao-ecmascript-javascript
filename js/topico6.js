function loopComFor() {
    let numeros = [10, 20, 30, 40, 50]
    console.group()
    for (let i = 0; i < numeros.length; i++) {
        console.log(i)
    }
    console.groupEnd()
}

function loopComForIn() {
    let numeros = [10, 20, 30, 40, 50]
    console.group()
    for (const numero in numeros) {
        console.log(numero)
    }
    console.groupEnd()
}

function loopComForOf() {
    let numeros = [10, 20, 30, 40, 50]
    console.group()
    for (const numero of numeros) {
        console.log(numero)
    }
    console.groupEnd()
}

function loopComForEach() {
    let numeros = [10, 20, 30, 40, 50]

    numeros.forEach((numero, indice) => {
        console.log("Numero " + numero + " na posição " + indice)
    })
}

function logarArr() {
    const arr = ['a', 'b', 'c'];
    arr.test = 'bad';

    console.log(arr)
}

function logarArrLength() {
    const arr = ['a', 'b', 'c'];
    arr.test = 'bad';

    console.log(arr.length)
}

function logarArrNoIndice(i) {
    const arr = ['a', 'b', 'c'];
    arr.test = 'bad';

    console.log(arr[i])
}

    const arrayComVazio = ['a', , 'c'];

function testeComFor() {
    // Mostra "a, undefined, c"
    console.group()
    for (let i = 0; i < arrayComVazio.length; ++i) {
        console.log(arrayComVazio[i]);
    }
    console.groupEnd()
}

function testeComForEach() {
    // Mostra "a, c"
    console.group()
    arrayComVazio.forEach(v => console.log(v));
    console.groupEnd()
}

function testeComForIn() {
    // Mostra "a, c"
    console.group()
    for (let i in arrayComVazio) {
        console.log(arrayComVazio[i]);
    }
    console.groupEnd()
}

function testeComForOf() {
    // Mostra "a, undefined, c"
    console.group()
    for (const v of arrayComVazio) {
        console.log(v);
    }
    console.groupEnd()
}