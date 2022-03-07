function ola() {
    let nome = "Caio";
    console.log("Olá, " + nome)
}

function olaSemStrict() {
    nomeGlobal = "Caio";
    console.log("Olá, " + nomeGlobal)
}


const olaComStrict = () => {
    'use strict'

    nomeStrict = "Caio";
    console.log("Olá, " + nomeStrict)
}

class Aluno {
    get nota() {
        return 6;
    }
}

let aluno

function criarInstanciaAluno() {
    aluno = new Aluno()
    console.log(aluno)
}

function atribuirNotaAluno() {
    aluno.nota = 10
}

function mostrarNotaAluno() {
    console.log(aluno.nota)
}

function atribuirNotaAlunoComStrict() {
    'use strict'
    aluno.nota = 10
    console.log(aluno)
}

function tentarMatarDevDoCoracao() {
    delete window.document
}

function verificarSeAindaExiste() {
    console.log(window.document)
}

function naoMatarDevDoCoracao() {
    'use strict'
    delete window.document
}