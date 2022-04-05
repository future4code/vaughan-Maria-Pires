function recebeNomeEAniversario(nome: string, dataNascimento: string): string{
    let dataDividida = dataNascimento.split("/")
    const dia = dataDividida[0]
    const mes = dataDividida[1]
    const ano = dataDividida[2]
    return `Olá, me chamo ${nome}, nasci no dia ${dia} do mês ${mes} do ano de ${ano}.`
}

console.log(recebeNomeEAniversario('Duda', '15/08/1999'))