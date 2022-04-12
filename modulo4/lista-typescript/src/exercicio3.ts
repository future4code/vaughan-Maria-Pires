enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nomeDoFilme: string,
    anoDeLancamento: number,
    generoDoFilme: GENERO,
    pontuacaoCritica?: number
}

function retornaInformacoesFilme(nome: string, ano: number, genero: GENERO, pontuacaoCritica?: number): Filme{
	if(nome && ano && genero && pontuacaoCritica){
		return{
			nomeDoFilme: nome,
			anoDeLancamento: ano,
			generoDoFilme: genero,
			pontuacaoCritica: pontuacaoCritica
		}
	} else if(nome && ano && genero){
		return{
			nomeDoFilme: nome,
			anoDeLancamento: ano,
			generoDoFilme: genero
		}
	}
}

console.log(retornaInformacoesFilme('Duna', 2021, GENERO.ACAO, 74))
console.log(retornaInformacoesFilme('Duna', 2021, GENERO.ACAO))