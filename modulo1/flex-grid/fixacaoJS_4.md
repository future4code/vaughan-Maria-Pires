```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let ocorrencias = 0;
  for(let i = 0; i < arrayDeNumeros.length; i++){
    if(numeroEscolhido == arrayDeNumeros[i]){
      ocorrencias++;
    }
  }
  if(ocorrencias == 0){
    return `Número não encontrado`
  }
  
  else if(ocorrencias > 0){
    return `O número ${numeroEscolhido} aparece ${ocorrencias}x`
  }
}
```

