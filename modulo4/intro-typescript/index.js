function checaTriangulo(a, b, c) {
    if (a !== b && b !== c) {
        return "Escaleno";
    }
    else if (a === b && b === c) {
        return "Equilátero";
    }
    else {
        return "Isósceles";
    }
}
console.log(checaTriangulo(5, 5, 5));
function imprimeTresCoresFavoritas() {
    var cor1 = process.argv[2];
    var cor2 = process.argv[3];
    var cor3 = process.argv[4];
    return [cor1, cor2, cor3];
}
console.log(imprimeTresCoresFavoritas());
function checaAnoBissexto(ano) {
    var cond1 = ano % 400 === 0;
    var cond2 = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
}
console.log(checaAnoBissexto(1996));
function comparaDoisNumeros(num1, num2) {
    var maiorNumero;
    var menorNumero;
    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }
    var diferenca = maiorNumero - menorNumero;
    return diferenca;
}
console.log(comparaDoisNumeros(10, 9));
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao) {
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    if (idade <= 20) {
        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos";
    }
    else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos";
    }
    else if (idade > 50) {
        return tempoCarteira >= 15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos";
    }
    else {
        return "error";
    }
}
console.log(checaRenovacaoRG(2022, 1985, 2004));
