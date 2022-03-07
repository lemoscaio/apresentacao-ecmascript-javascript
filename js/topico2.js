// DEFAULT PARAMETERS - FIRST EXAMPLE

function multiply(a, b = 2) {
    console.group("multiply(" + a + "," + b + ")")
    console.log("A multiplicação é " + a * b)
    console.groupEnd()
    return a * b
}

function foo(num = 1, multi = multiply(num)) {
    console.group("foo(" + num + ")")
    console.log("O retorno da função foo é: " + [num, multi]);
    console.groupEnd()
    return [num, multi]
}

// BEFORE DEFAULT PARAMETERS 

function beforeDefaultParameters(tag, config) {
    function createElement(tag, config) {
        tag = tag || 'div';
        config = config || {};

        const element = document.createElement(tag);
        const content = config.content || 'Padrãozinho';
        const text = document.createTextNode(content);
        let classNames = config.classNames;

        if (classNames === undefined) {
            classNames = ['modulo-texto', 'padrao'];
        }

        element.classList.add(...classNames);
        element.appendChild(text);

        console.log(element)
        return element;
    }
    createElement(tag, config)
}

function afterDefaultParameters(tag, config) {
    function createElement(tag = 'div', {
        content = 'Padrãozinho',
        classNames = ['modulo-texto', 'especial']
    } = {}) {
        const element = document.createElement(tag);
        const text = document.createTextNode(content);

        element.classList.add(...classNames);
        element.appendChild(text);

        console.log(element)
        return element;
    }
    createElement(tag, config)
}

// Template strings - Tagged function -> Exemplo 1
function mensagemExemplo(mensagemParte1, nome, mensagemParte2) {
    const mensagemFinal = console.log(`${mensagemParte1} ${nome}! ${mensagemParte2}`)
    return mensagemFinal
}

function exemploMelhorado(strings, ...expressoes) {
    // return strings
    // return expressoes
    return expressoes.reduce((acumulator, expressao, index) => {
        return acumulator + expressao + strings[index + 1]
    }, strings[0])
}

// Exemplo melhorado (COMPLETO)
function executarExemploMelhorado() {
    nome = "Caio"
    let mensagemMelhoradaFinal = exemploMelhorado `Olá ${nome}! Tudo bem?`

    console.log(mensagemMelhoradaFinal)
}

function exemploMelhoradoApenasStrings(strings, ...expressoes) {
    return strings
}
// Exemplo melhorado (APENAS STRINGS)
function executarExemploMelhoradoApenasStrings() {
    nome = "Caio"
    let mensagemMelhoradaFinal = exemploMelhoradoApenasStrings `Olá ${nome}! Tudo bem?`

    console.log(mensagemMelhoradaFinal)
}

// Exemplo melhorado (APENAS EXPRESSÕES)
function exemploMelhoradoApenasExpressoes(strings, ...expressoes) {
    return expressoes
}

function executarExemploMelhoradoApenasExpressoes() {
    nome = "Caio"
    let mensagemMelhoradaFinal = exemploMelhoradoApenasExpressoes `Olá ${nome}! Tudo bem?`

    console.log(mensagemMelhoradaFinal)
}