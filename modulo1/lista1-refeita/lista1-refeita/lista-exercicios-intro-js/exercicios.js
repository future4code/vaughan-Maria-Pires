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
  altura = Number(prompt("Altura do retângulo:"))
  largura = Number(prompt("Largura do retângulo:"))
  areaRetangulo = altura * largura
  console.log(areaRetangulo)
}

calculaAreaRetangulo()

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Em que ano estamos?"))
  anoDeNascimentoDoUsuario = Number(prompt("Em que ano você nasceu?"))
  idadeDoUsuario = anoAtual - anoDeNascimentoDoUsuario
  console.log(idadeDoUsuario)
}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)
}
calculaIMC()

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nomeDoUsuario = prompt("Qual é o seu nome?")
  idadeUsuario = Number(prompt("Qual é a sua idade?"))
  emailDoUsuario = prompt("Qual é o seu email?")
  console.log(`Meu nome é ${nomeDoUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailDoUsuario}.`)

}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  corFavorita1 = prompt("Qual é a sua cor favorita?")
  corFavorita2 = prompt("Diga mais uma cor favorita:")
  corFavorita3 = prompt("Informe mais uma cor de que você gosta muito:")
  arrayCores = [corFavorita1, corFavorita2, corFavorita3]
  console.log(arrayCores)

}
imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}
retornaStringEmMaiuscula()

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return qtd = custo/valorIngresso

}

calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}
checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}
retornaPrimeiroElemento()

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length-1]

}
retornaUltimoElemento()

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array;
}
trocaPrimeiroEUltimo()

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
return string1 === string2

}

checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Em que ano estamos?"))
  anoNascimento = Number(prompt("Em que ano você nasceu?"))
  idade = anoAtual - anoNascimento
  anoEmissao = Number(prompt("Em que ano foi emitida a sua carteira de identidade?"))
  let renovar;
  if(idade <= 20){
    renovar = anoEmissao + 5
  }
  if(idade > 20 && idade <= 50){
    renovar = anoEmissao + 10
  }

  if(idade > 50){
    renovar = anoEmissao + 15
  }

  console.log(anoAtual >= renovar)

}
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
 if(ano % 4 == 0 && ano % 100 !=0){
   return true;
 }
 else if(ano % 4 == 0 && ano % 100 == 0 && ano % 400 == 00){
  return true;
 } else {
   return false;
 }
}

checaAnoBissexto()


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  maiorDeIdade = prompt("Você tem mais de 18 anos?")
  escolaridade = prompt("Você tem o ensino médio completo?")
  disponibilidadeDeHorario = prompt("Você tem disponibilidade de horário?")

  if(maiorDeIdade == "sim" && escolaridade == "sim" && disponibilidadeDeHorario == "sim"){
    console.log(true);
  } else {
    console.log(false);
  }

}

checaValidadeInscricaoLabenu()