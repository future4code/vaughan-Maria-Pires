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
    return array.sort()
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
     let maiorNumero = -Infinity;
     for (let i = 0; i < array.length; i++) {
         if (array[i] > maiorNumero) {
             maiorNumero = array[i];
            }
        }
        return maiorNumero;
      }
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
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
    
    
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC){
        return `Equilátero`;
    } else if(ladoA !== ladoB & ladoB !== ladoC && ladoA !== ladoC){
        return `Escaleno`
    } else {
        return `Isósceles`
    }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 

  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const objetoFilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
    }
    return `Venha assistir ao filme ${objetoFilme.nome}, de ${objetoFilme.ano}, dirigido por ${objetoFilme.diretor} e estrelado por ${objetoFilme.atores[0]}, ${objetoFilme.atores[1]}, ${objetoFilme.atores[2]}, ${objetoFilme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonima = {
        ...pessoa,
        nome: 'ANÔNIMO'
    }
   return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let arrayPessoasQueTemPermissao = []
    let altura;
    let idade;
    if(altura >= 1.5 && 60 > idade > 14){
        return arrayPessoasQueTemPermissao.push()
    }
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
