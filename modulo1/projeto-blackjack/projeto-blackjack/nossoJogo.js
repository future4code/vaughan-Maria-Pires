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

    let jogo = (novaRodada) => {
       console.log("Boas vindas ao jogo de Blackjack!")
       if(confirm("Quer iniciar uma nova rodada?")){
         usuarioCarta1 = comprarCarta()
         usuarioCarta2 = comprarCarta()
        
         somaCartasDoUsuario = usuarioCarta1.valor + usuarioCarta2.valor
     
         computadorCarta1 = comprarCarta()
         computadorCarta2 = comprarCarta()
         
         somaCartasDoComputador = computadorCarta1.valor + computadorCarta2.valor
         console.log(`Cartas do usuário: ${usuarioCarta1.texto}; ${usuarioCarta2.texto}; Pontuação do usuário: ${somaCartasDoUsuario}`)
         console.log(`Cartas do computador: ${computadorCarta1.texto}; ${computadorCarta2.texto}; Pontuação do computador: ${somaCartasDoComputador}`)
         if(somaCartasDoComputador > somaCartasDoUsuario){
            console.log("O computador venceu!")
         } else if(somaCartasDoUsuario > somaCartasDoComputador){
            console.log("O usuário venceu!")
         } else {
            console.log("Empate")
         }

       } else {
          console.log("O jogo acabou")
       }
      }
    
jogo()


