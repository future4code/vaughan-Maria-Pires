//EXERCÍCIOS DE INTEPRETAÇÃO DE CÓDIGO
// 1A QUESTÃO
/*
a) Undefined, pq o array não havia sido declarado antes.
b) Null, pq foi declarado que esse era o valor do array.
c) Retorna o valor 11, que é o número de elementos que esse array possui.
d) Dá erro, pq um array é uma lista de elementos, de modo que essa variável precisaria de pelo menos mais
um elemento pra ser considerada um array.
e) Dá erro, pq o array foi declarado do jeito errado e, além disso, não possui o número mínimo
para ser considerado um array (dois elementos, que deveriam estar entre colchetes).
f) Dá erro, pq a declaração do array também está incorreta. 
*/

//2A QUESTÃO
/* É impresso "SUBI NUM ÔNIBUS EM MIRROCOS" e o tamanho é igual a 27, 
pq o length contabiliza os espaços.
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1A QUESTÃO
const nomeUsuario = prompt("Qual é o seu nome?")
const emailUsuario = prompt("Qual é o seu e-mail?")
console.log(`O e-mail ${emailUsuario.trim(emailUsuario)} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario.trim(nomeUsuario)}.`)

//2A QUESTÃO
let comidasFavoritas = ["Moqueca", "Torta de morango", "Coxinha", "Macarronada", "Sushi"]
console.log(comidasFavoritas)
console.log("Essas são as minhas comidas favoritas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
const comidaFavoritaUsuario = prompt("Fale uma comida favorita:")
//Não consegui fazer a letra D//

//3A QUESTÃO
listaDeTarefas = []
tarefa1Usuario = prompt("Informe uma tarefa que você precisa fazer hoje:")
tarefa2Usuario = prompt("Informe mais uma tarefa que você precisa fazer hoje:")
tarefa3Usuario = prompt("Informe outra tarefa que você precisa fazer hoje:")
listaDeTarefas.push(tarefa1Usuario, tarefa2Usuario, tarefa3Usuario)
console.log(listaDeTarefas)
indice = Number(prompt("Digite o índice de uma tarefa que já realizou (0, 1 ou 2): "))
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)


