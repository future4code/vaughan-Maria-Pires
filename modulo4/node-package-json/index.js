// 1A) Através da propriedade process.argv, que armazena os parâmetros passados.

const nome = "Duda"
const idade = Number(22)
const novaIdade = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos.`)
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${novaIdade}.`)

const soma = Number(process.argv[2]) + Number(process.argv[3])
console.log(soma)
const sub = Number(process.argv[2]) - Number(process.argv[3])
console.log(sub)
const mult = Number(process.argv[2]) * Number(process.argv[3])
console.log(mult)
const div = Number(process.argv[2]) / Number(process.argv[3])
console.log(div)

let tarefas = ["lavar o piso"]
const novaTarefa = process.argv[4]
tarefas.push(novaTarefa)
console.log(tarefas)