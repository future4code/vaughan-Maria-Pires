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
//1A QUESTÃO (LETRAS "A" e "B")
const nomesPessoa = {
    nome: "Eduarda",
    apelidos: ["Duda", "Du", "Dudinha"],
}
apresentar = function(nomesPessoa){
    console.log(`Eu sou ${nomesPessoa.nome}, mas pode me chamar de ${nomesPessoa.apelidos[0]}, ${nomesPessoa.apelidos[1]} ou ${nomesPessoa.apelidos[2]}.`)
}

apresentaçao = apresentar(nomesPessoa)


}
