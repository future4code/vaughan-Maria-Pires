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
comidasFavoritas = ["Moqueca", "Torta de morango", "Coxinha", "Macarronada", "Sushi"]
console.log(comidasFavoritas)
console.log("Essas são as minhas comidas favoritas:")
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
const comidaFavoritaUsuario = prompt("Fale uma comida favorita:")
comidasFavoritas.spice(1, 1)
comidasFavoritas.push(comidaFavoritaUsuario)
//AINDA FAZENDO//

