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

function retornaInformacoesFilme(){
	
}