```
function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
 let conceito;
 media = (ex * 1 + p1 * 2 + p2 * 3) / 6
 if(media >= 9){
  conceito = 'A'
 }else if(media < 9 && media > 7.5){
   conceito = 'B'
 }else if(media >= 6 && media < 7.5){
  conceito = 'C'
 }else if(media < 6){
  conceito = 'D'
 } 
 return conceito
}

calculaNota()
```

