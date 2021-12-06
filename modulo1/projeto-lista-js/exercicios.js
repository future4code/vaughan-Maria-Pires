// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Altura do retângulo:"))
  const largura = Number(prompt("Largura do retângulo:"))
  const resultado = altura * largura
  console.log(resultado)
}





// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Ano atual:"))
  const anoNascimento = Number(prompt("Ano nascimento:"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
  

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
  // implemente sua lógica aqui

}
const pesoUsuario = Number(prompt("Peso do usuário, em kg:"))
const alturaUsuario = Number(prompt("Altura do usuário, em m:"))
imcUsuario = calculaIMC(pesoUsuario, alturaUsuario)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Nome:")
  const idade = Number(prompt("Idade:"))
  const email = prompt("E-mail:")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)  
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Diga uma cor favorita:")
  const cor2 = prompt("Diga mais uma:")
  const cor3 = prompt("Diga mais outra:")
  console.log(listaCoresFavoritas = [cor1, cor2, cor3])
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}
string1 = prompt("Digite algo:")
conversorMaiusculas = retornaStringEmMaiuscula(string1)

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

  }
  custo1 = Number(prompt("Custo do espetáculo:"))
  valorIngresso1 = Number(prompt("Valor do ingresso:"))
  qtdIngressos = calculaIngressosEspetaculo(custo1, valorIngresso1)


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}
primeiraString = prompt("String 1:")
segundaString = prompt("String 2:")
compararTamanho = checaStringsMesmoTamanho(primeiraString, segundaString)


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}
lista = [1, 2, 3, 4]
primeiroElemento = retornaPrimeiroElemento(lista)


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}
lista2 = [4, 7, 8, 20]
ultimoElemento = retornaUltimoElemento(lista2)

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  //implemente sua lógica aqui
  


// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase()
}
string_1 = prompt("String 1:")
string_2 = prompt("String 2:")
checar = checaIgualdadeDesconsiderandoCase(string_1, string_2)

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}