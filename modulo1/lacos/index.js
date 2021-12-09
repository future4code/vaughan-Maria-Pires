//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* 1A QUESTÃO
O código adiciona uma unidade a "i" enquanto "i" é menor do que 5 e, depois, 
soma cada um desses valores gerados nos laços. O valor impresso é 10, que é justamente a soma dos valores
gerados em cada loop até o "i" chegar a 4.

2A QUESTÃO
a) Todos os valores acima de 18.
b) Sim, adicionando uma variável pro índice no for e chamando ela no console.

3A QUESTÃO
*
**
***
****



*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1A QUESTÃO

nomesBichinhos = []

numeroBichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
if (numeroBichinhos === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else if(numeroBichinhos > 0){
    for(let i = 1; i <= numeroBichinhos; i++){
        nomesBichinhos.push(prompt("Nome do bichinho: "))
    }
    console.log(`Nome dos bichinhos: ${nomesBichinhos}`)
}


//2A QUESTÃO
//LETRA "A"
arrayOriginal = [2, 4, 25, 29, 31, 98, 112, 174]

for(let i = 0; i < arrayOriginal.length; i++){
    console.log(arrayOriginal[i])
}

//LETRA "B"
for(let i = 0; i < arrayOriginal.length; i++){
    arrayOriginal[i]/10
    console.log(arrayOriginal[i]/10)
}

//LETRA "C"
arrayPares = []
for(let i = 0; i < arrayOriginal.length; i++)
if(arrayOriginal[i] % 2 == 0){
arrayPares.push(arrayOriginal[i])
}
console.log(arrayPares)

//LETRA "D"
// Não entendi a pergunta :(


//LETRA "E"

let valorMaximo = 0
for(let valor of arrayOriginal){
    if(valor > valorMaximo){
        valorMaximo = valor
    }
}
console.log(`Valor máximo:`, valorMaximo)

valorMinimo = Math.min(...arrayOriginal)
console.log(`Valor mínimo: ${valorMinimo}`)



