// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1A QUESTÃO
/* a) False; b) false; c) true; d) boolean.
*/

//2A QUESTÃO
/*
Sim, os números são unidos, ao invés de somados. Isso acontece pq tudo o que o usuário digita no prompt
volta como string.
*/

//3A QUESTÃO
// Para resolver esse problema, é preciso fazer a conversão das variáveis de string para número.


//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1A QUESTÃO
idadeUsuario = Number(prompt("Qual é a sua idade? "))
idadeAmigo = Number(prompt("Qual é a idade do seu/sua melhor amigo(a)? "))

idadeMaior = idadeUsuario > idadeAmigo
difIdade = idadeUsuario - idadeAmigo
console.log("A sua idade é maior do que a do seu amigo?", idadeMaior)
console.log("A diferença de idade é de", difIdade, "anos.")

//2A QUESTÃO
numPar = Number(prompt("Insira um número par: "))
console.log("Resto da divisão:", numPar % 2)
/* O resto da divisão para números pares é sempre igual a 0, enquanto para os números ímpares é sempre
igual a 1. */

//3A QUESTÃO
idadeAnos = Number(prompt("Qual é a sua idade em anos? "))
idadeMeses = idadeAnos * 12
idadeDias = 365 * idadeAnos
idadeHoras = 24 * 365 * idadeAnos

console.log("Idade do usuário em meses:", idadeMeses)
console.log("Idade do usuário em dias:", idadeDias)
console.log("Idade em horas:", idadeHoras)

//4A QUESTÃO
num1 = Number(prompt("Insira o primeiro número:"))
num2 = Number(prompt("Insira o segundo número:"))
num1Maior = num1 > num2
num1Igual = num1 === num2
num1Div = num1 % num2 === 0
num2Div = num2 % num1 === 0
console.log("O primeiro número é maior do que o segundo?", num1Maior)
console.log("O primeiro número é igual ao segundo?", num1Igual)
console.log("O primeiro número é divisível pelo segundo? ", num1Div)
console.log("O segundo número é divisível pelo primeiro?", num2Div)
