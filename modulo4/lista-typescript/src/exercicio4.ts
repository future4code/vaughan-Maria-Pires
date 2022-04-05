enum setores {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"
}

type PessoasColaboradoras = {
    nome: string,
    salario: number,
    setor: setores,
    presencial: boolean
}

const arrayPessoasColaboradoras: PessoasColaboradoras[] = [
	{ nome: "Marcos", salario: 2500, setor: setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salario: 2800, setor: setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: setores.MARKETING, presencial: true }
]

function recebeArray(arrayPessoasColaboradoras: PessoasColaboradoras[]){
    const pessoasDoMarketing = arrayPessoasColaboradoras.filter((funcionario) => {
        return funcionario.setor === "marketing" && funcionario.presencial === true
    })
    return pessoasDoMarketing
}

console.log(recebeArray(arrayPessoasColaboradoras))

