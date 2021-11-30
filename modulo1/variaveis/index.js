// EXERCÍCIOS DE INTEPRETAÇÃO DE CÓDIGO

/*
1A QUESTÃO
Em console.log(b), será impresso o valor de b, que é 10.
Em console.log(a, b), serão impressos os valores de a (10)  e de b (agora 5, dado que foi alterado).
*/

/* 2A QUESTÃO
c = a = 10
b = c = 10
a = b = 10
A, B e C são iguais a 10.
*/

/* 3A QUESTÃO
let horasDia = prompt("Quantas horas você trabalha por dia?")
let salarioDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDia/horasDia} por hora`)
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

let nome;
let idade;


console.log(typeof nome)
console.log(typeof idade)

/*
Esse tipo foi impresso pq nenhum valor foi atribuído.
*/

nome = prompt("Digite o seu nome: ")
idade = prompt("Informe a sua idade: ")

console.log(typeof nome)
console.log(typeof idade)

/*
As duas variáveis são lidas como string pq, no JS, tudo o que o usuário digita no prompt passa a ser
considerado string
*/

console.log("Olá,", nome, "você tem", idade, "anos")

// 2a questão 
let perguntaUm = prompt("Você está vestindo azul hoje?")
let perguntaDois = prompt("Está chovendo agora? ")
let perguntaTres = prompt("Está de noite?")
console.log("Você está vestido azul hoje?", perguntaUm)
console.log("Está chovendo agora? ", perguntaDois)
console.log("Está de noite?", perguntaTres)


//3a questão

