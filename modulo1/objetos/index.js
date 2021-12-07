//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*1A QUESTÃO
1. Matheus Nachtergaele;
2. Virginia Cavendish;
3. {canal: "Globo", horario: "14h"}
*/

/* 2A QUESTÃO
a) 1. {nome: "Juca", idade: 3, raca: "SRD"};
2. {nome: "Juba", idade: 3, raca: "SRD"}
3. {nome: "Jubo", idade: 3, raca: "SRD"}

b) Faz o espalhamento, a cópia de um objeto pra "colar" no outro.
*/

/*3A QUESTÃO
a) False e undefined.
b) Porque false é o valor de backender e a altura não foi declarada.
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1A QUESTÃO (LETRA "A")
const nomesPessoa = {
    nome: "Eduarda",
    apelidos: ["Duda", "Du", "Dudinha"],
}
apresentar = function(nomesPessoa){
    console.log(`Eu sou ${nomesPessoa.nome}, mas pode me chamar de ${nomesPessoa.apelidos[0]}, ${nomesPessoa.apelidos[1]} ou ${nomesPessoa.apelidos[2]}.`)
}

apresentacao = apresentar(nomesPessoa)

//1A QUESTÃO (LETRA "B")

const nomesNovo = {
    ...nomesPessoa,
    apelidos: ["Edu", "Madu", "Dupi"]
}

apresentacaoNova = apresentar(nomesNovo)

//2A QUESTÃO
//LETRA A

const objeto1 = {
    nome: "Marcela",
    idade: 24,
    profissao: "dentista" 
}

const objeto2 = {
    nome: "João",
    idade: 33,
    profissao: "marceneiro"
}

//LETRA B

dados = function(objeto1){
    console.log(`Nome: ${objeto1.nome}`)
    console.log(`Número de caracteres do nome: ${objeto1.nome.length}`)
    console.log(`Idade: ${objeto1.idade}`)
    console.log(`Profissão: ${objeto1.profissao}`)
    console.log(`Número de caracteres da profissão: ${objeto1.profissao.length}`)
}

dados1 = dados(objeto1)
dados2 = dados(objeto2)

//3A QUESTÃO
// LETRA "A"
carrinho = []

// LETRA "B"
const fruta1 = {
    nome: "melancia",
    disponibilidade: true
}

const fruta2 = {
    nome: "manga",
    disponibilidade: true
}

const fruta3 = {
    nome: "pêra",
    disponibilidade: true
}

recebeFruta = function(fruta1){
    carrinho.push(fruta1)
}

melancia = recebeFruta(fruta1)
manga = recebeFruta(fruta2)
pera = recebeFruta(fruta3)

console.log(carrinho)