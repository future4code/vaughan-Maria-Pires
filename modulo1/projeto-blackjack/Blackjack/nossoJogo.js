/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogo de Blackjack!")
    
    let rodada = (novaRodada) => {
       novaRodada = prompt("Quer iniciar uma nova rodada?")
       if(novaRodada === "sim"){
          console.log(true)
       }
       else if(novaRodada === "não"){
          console.log(false)
       }
    }

    rodada()

    

