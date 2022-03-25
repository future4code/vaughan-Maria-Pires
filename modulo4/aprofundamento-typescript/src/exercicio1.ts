//1A) Ocorre um erro de tipo, pois o tipo definido é uma string e o valor atribuído é um número.
//1B) Na declaração do tipo da variável, adicionamos um " | (tipo escolhido) ".

//1C:
type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum corFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const pessoa1: pessoa = {
    nome: "Duda",
    idade: 22,
    corFavorita: corFavorita.AMARELO
}

const pessoa2: pessoa = {
    nome: "Ana",
    idade: 90,
    corFavorita: "lilás"
}

const pessoa3: pessoa = {
    nome: "Luiz",
    idade: 80,
    corFavorita: "marrom"
}

console.log(pessoa1, pessoa2, pessoa3)
