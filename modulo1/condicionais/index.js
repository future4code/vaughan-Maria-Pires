//EXERCÍCIOS DE INTEPRETAÇÃO DE CÓDIGO
/* 1A QUESTÃO
a) O código testa se o número inserido pelo usuário é par ou não. 
b) Para os números pares.
c) Para os números ímpares.

2A QUESTÃO
a) Para imprimir a fruta escolhida e o seu respectivo preço.
b) "O preço da fruta Maçã é R$2.25"
c) Imprimiria os valores 5.00, ao invés de 5.50.

3A QUESTÃO
a) Declarando a variável "numero", que terá o valor dado pelo usuário.
b) "Esse número passou no teste" e o aviso de erro, pq a variável "mensagem" não foi definida. No caso 
de -10, aparece apenas o aviso de erro, já que o primeiro texto só é exibido se o número digitado
for maior do que 0. 
c) VOLTAR AQUI DPS.

*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1A QUESTÃO
idadeUsuario = Number(prompt("Qual é a sua idade?"))

function podeDirigir(idade){
    if (idadeUsuario >= 18){
        console.log(`Você já pode dirigir!`)
    } else {
        console.log(`Você ainda não pode dirigir!`)
    }
}

podeDirigir(idadeUsuario)

//2A QUESTÃO
turnoAluno = prompt("Em qual turno você estuda?")

function horarioAulas(turno){
    if (turno == "M"){
        console.log(`Bom dia!`)
    } else if (turno == "V"){
        console.log(`Boa tarde!`)
    } else if(turno == "N"){
        console.log(`Boa noite!`)
    } else {
        console.log(`Opção inválida.`)
    }
}
horarioAulas(turnoAluno)

//3A QUESTÃO

turnoDosEstudos = prompt("Em qual turno você estuda?")

switch(turnoDosEstudos){
    case "M":
        console.log(`Bom dia!`);
        break;
    case "V":
        console.log(`Boa tarde!`);
        break;
    case "N":
        console.log(`Boa noite!`);
        break;
    default:
        console.log(`Opção inválida.`)
}

//4A QUESTÃO

generoFilme = prompt("Qual é o gênero do filme que vão assistir?")
valorIngresso = Number(prompt("Qual é o valor do ingresso?"))

function irOuNao(genero, ingresso){
    if (genero == "fantasia" && ingresso <= 15){
        console.log("Bom filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}

irOuNao(generoFilme, valorIngresso)


let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)