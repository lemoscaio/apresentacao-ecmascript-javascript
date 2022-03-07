// Window

function declaraNoWindow() {
    apostoQueEhGlobal = "é claro que é global"
}

function logarDeclaraNoWindow() {
    console.log(apostoQueEhGlobal)
}

// VAR

v1 = 'Hello World';
var v2 = 2;

function f() {
    v3 = true;
    var v4 = v2 + 2;
}

f()

function problemao() {
    var v5 = "até então, tudo ok"
    console.log(v5)
    if (2 + 2 === 4) {
        var v6 = "será que ela vai ser impressa fora do IF?";
        console.log(v6)
    }
    console.log(v6)
}

// LET e CONST

function semProblemao() {
    let v7
    v7 = "até então, tudo ok"
    console.log(v7)
    if (2 + 2 === 4) {
        let v8 = "será que ela vai ser impressa fora do IF?";
        console.log(v8)
    }
    console.log(v8)
}