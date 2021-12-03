//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1A QUESTÃO
/* a) Serão impressos os valores 10 e 50.
b) Será impresso o valor 50, pq será feito o cálculo 2 * 5 = 10 * 5 = 50.
*/
//2A QUESTÃO
/* a) Essa função verifica se a palavra "cenoura" está ou não no texto do usuário. Se estiver, retorna
true; senão, retorna false.
b) I) True. II) True, pq apesar de no texto constar "CENOURAS" - e o JS diferenciar letras maiúsculas
de minúsculas -, a função transforma as letras maiúsculas em minúsculas, de modo que "CENOURAS" vira
"cenouras" - e, portanto, inclui "cenoura". III) True também, pelo mesmo motivo.
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1A QUESTÃO [LETRA A]
nome = "Duda"
idade = 22
cidade = "Olinda"
profissao = "estudante"

function bio(){
    return `Meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}


console.log(bio())

//2A QUESTÃO [letra A]
function soma(num1, num2){
    return num1 + num2
}
console.log(soma(5, 10))

//2A QUESTÃO [letra B]
function comparar(numero1, numero2){
    return numero1 === numero2
}
numero1 = 3
numero2 = 4
console.log(`Os números são iguais?`, comparar(numero1, numero2))

//2A QUESTÃO [letra C]
function parImpar(numero){
    return numero % 2 === 0
}
numero = 6
console.log(`O número é par?`, parImpar(numero))

//2A QUESTÃO [letra D]
function formatar(texto){
    texto = texto.toUpperCase()
    console.log(texto.length)
    return texto
}
texto1 = formatar("Está fazendo um tempo bom hoje.")
console.log(texto1)

//3A QUESTÃO
//Não deu tempo, vou tentar fazer amanhã.