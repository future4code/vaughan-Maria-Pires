//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* 1A QUESTÃO
O código adiciona uma unidade a "i" enquanto "i" é menor do que 5 e, depois, 
soma cada um desses valores gerados nos laços. O valor impresso é 10, que é justamente a soma dos valores
gerados em cada loop até o "i" chegar a 4.

2A QUESTÃO


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
