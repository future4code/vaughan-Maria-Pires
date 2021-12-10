/*EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
1A QUESTÃO
Vai imprimir, por vez, os itens dentro dos objetos (os nome e apelidos) e o índice
desses objetos no array, juntamente com o length do array.


2A QUESTÃO
Um array com os nomes dos "usuarios", juntamente com o índice 
dos elementos e o length do array.

3A QUESTÃO
Retornam os itens cujo apelido é diferente de "Chijo", ou seja, os objetos 1 e 2, 
com seus respectivos nomes e apelidos.


*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1A QUESTÃO (LETRA "A")
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomeDosDoguinhos = pets.map((doguinhos) => {
    return doguinhos.nome
 })
 console.log(nomeDosDoguinhos)

 //LETRA "B"
 const apenasSalsichas = pets.filter((doguinhos, indice, array) => {
    return doguinhos.raca === "Salsicha"
    })
console.log(apenasSalsichas)

//LETRA "C"


//2A QUESTÃO (LETRA "A")
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


 const nomeDosProdutos = produtos.map((itens) => {
    return itens.nome
 })
 console.log(nomeDosProdutos)

 //LETRA "B"
 


 //LETRA "C"
const categoriaBebidas = produtos.filter((produtosMercado) => {
    return produtosMercado.categoria === "Bebidas"
})

console.log(categoriaBebidas)

//LETRA "D"
const ContemYpe = produtos.filter((produtosDoMercado) => {
    return produtosDoMercado.nome.includes("Ypê")
})

console.log(ContemYpe)

//LETRA "E"