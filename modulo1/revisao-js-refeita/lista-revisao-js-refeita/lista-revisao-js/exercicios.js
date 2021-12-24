// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
   
}
retornaTamanhoArray()

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}
retornaArrayInvertido()

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   let arrayOrdenado = array.sort((a, b) => a - b);
   return arrayOrdenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayNumerosPares = array.filter(itens => itens % 2 === 0)
    return arrayNumerosPares
}
retornaNumerosPares()

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = array.filter(itens => itens % 2 === 0)
    let paresAoQuadrado = arrayPares.map(itens => itens * itens)
    return paresAoQuadrado
}

retornaNumerosParesElevadosADois()
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = - Infinity;
    for(let i=0; i <= array.length; i++){
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}
retornaMaiorNumero()

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2){
    let maiorNumero;
    let menorNumero;
    let diferenca;
    let maiorDivisivelPorMenor;
    if(num1 > num2){
        maiorNumero = num1;
        menorNumero = num2;
    } else {
        maiorNumero = num2;
        menorNumero = num1;
    } maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
    diferenca = maiorNumero - menorNumero
    return {
        maiorNumero,
        maiorDivisivelPorMenor,
        diferenca
       }
    }
    

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nPares = [];
    for(let i = 0; nPares.length < n; i++){
        if(i % 2 == 0){
            nPares.push(i)
        }
    }
    return nPares
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoB == ladoC){
        return `Equilátero`
    }
    if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return `Escaleno`
    } else {
        return `Isósceles`
    }

}
classificaTriangulo()

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array = array.sort((a, b) => a - b);
  let arraySegundoMaiorESegundoMenor = []
  arraySegundoMaiorESegundoMenor.push(array[array.length-2])
  arraySegundoMaiorESegundoMenor.push(array[1])
  return arraySegundoMaiorESegundoMenor
}
    
    


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   
}
retornaChamadaDeFilme()

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return pessoaAnonima  
}
retornaPessoaAnonimizada()

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter(itens => itens.idade > 14 && itens.idade < 60 && itens.altura >= 1.5)
    return pessoasAutorizadas;
}


retornaPessoasAutorizadas()

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter(itens => itens.idade <= 14 || itens.idade >= 60 || itens.altura <1.5)
    return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a, b) => (a.nome > b.nome) ?1 : -1)
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    
   
}