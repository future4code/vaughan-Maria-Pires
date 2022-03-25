function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

obterEstatisticas([10, 20, 1])

/* 2A) A entrada é o array de números e a saída é a variável de tipo "estatisticas", que contém os
valores "maior", "menor" e "media". /* 

/* 2B) As variáveis são "numeros", que é um array numérico; "numerosOrdenados", que é o array "numeros"
em sua versão ordenada; "soma", que é também numérica, e "estatisticas", que é uma variável de tipo que contém os 
números "maior", "menor" e "média".
*/ 

//falta mais um, ver depois