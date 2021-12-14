// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}
// EXERCÍCIO 02

function retornaArrayInvertido(array) {
    return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let numerosOrdenados = array.sort();
    return numerosOrdenados()
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let apenasNumerosPares = array.filter(numero => numero % 2 === 0)
    return apenasNumerosPares
}

    
  

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosParesAoQuadrado = array.filter(numero => numero % 2 === 0)
    numerosParesAoQuadrado = numerosParesAoQuadrado.map(numero => numero ** 2)
    return numerosParesAoQuadrado

 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array){
    let maior = - Infinity;
    for(let i = 0; i < array.length; i++){
        if(array[i] > maior){
            maior = numeros[i]
            return maior
}
    }
}
retornaMaiorNumero()


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC)
    return `Equilátero`}
    if(ladoA !== ladoB && ladoB !== ladoC){
        return `Escaleno`
    } else {
        return `Isósceles`
    }

classificaTriangulo()

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
